import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import ListTodos from './app/components/ListTodos/ListTodos';
import ModalWindow from './app/components/ModalAdd/ModalAdd';

import './App.scss';


function App() {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="App">
      {!!todos.length && <ListTodos className="list"/>}
      <ModalWindow />
    </div>
  );
}

export default App;
