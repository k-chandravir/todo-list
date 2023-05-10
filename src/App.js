import './App.css';
import Todo from './components/Todo/Todo';
import Heading from './components/heading/Heading';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Heading/>
      {/* <Routes>
        <Route path='/' element={ <Todo /> } ></Route>
      </Routes> */}
      <Todo/>
    </div>
  );
}

export default App;
