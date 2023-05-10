import {screen, render} from '@testing-library/react';
import Heading from '../Heading';

it("should show the title of the app", () => {
    render(<Heading/>);
    const titleHeading = screen.getByText(/Todo List/i);
    expect(titleHeading).toBeVisible();
});