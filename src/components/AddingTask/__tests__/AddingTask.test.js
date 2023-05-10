import { screen, render, fireEvent } from '@testing-library/react';
import AddingTask from '../AddingTask';

const mockSetTodos = jest.fn();

it('should show the input field', () => {
    render(<AddingTask todos={[]} setTodos={mockSetTodos} />);
    const taskInput = screen.getByPlaceholderText("Type Your Todo Here");
    expect(taskInput).toBeVisible();
})

it('should get active when clicked', () => {
    render(<AddingTask todos={[]} setTodos={mockSetTodos} />);
    const taskInput = screen.getByPlaceholderText("Type Your Todo Here");
    fireEvent.click(taskInput);
    fireEvent.change(taskInput, {target:{value:"Task One"}});
    expect(taskInput.value).toBe("Task One");
})

it('should have the the add button', () => {
    render(<AddingTask todos={[]} setTodos={mockSetTodos} />);
    const addTaskButtonElement = screen.getByRole('button', {name:"Add Task"});
    expect(addTaskButtonElement).toBeVisible();
})

it('should call setTodo Function upon click on the button', () => {
    render(<AddingTask todos={[]} setTodos={mockSetTodos} />);
    const taskInput = screen.getByPlaceholderText("Type Your Todo Here");
    fireEvent.click(taskInput);
    fireEvent.change(taskInput, {target:{value:"Task One"}});
    const addTaskButtonElement = screen.getByRole('button', {name:"Add Task"});
    fireEvent.click(addTaskButtonElement);
    expect(mockSetTodos).toBeCalled();
})

it('should empty the input field upon click on the button', () => {
    render(<AddingTask todos={[]} setTodos={mockSetTodos} />);
    const taskInput = screen.getByPlaceholderText("Type Your Todo Here");
    fireEvent.click(taskInput);
    fireEvent.change(taskInput, {target:{value:"Task One"}});
    const addTaskButtonElement = screen.getByRole('button', {name:"Add Task"});
    fireEvent.click(addTaskButtonElement);
    expect(taskInput.value).toBe("");
})
