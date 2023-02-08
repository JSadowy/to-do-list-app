import './App.css';
import { useState } from 'react';
import { todoData } from './todoData';
import { ToDoDisplaying } from './Components/ToDoDisplaying'

function App() {
  const [todo, setTodo] = useState(todoData)

  return (
    <div className="App">
      <h1>To Do App</h1>
      {
        todo.map((todo, date) => (
          <ToDoDisplaying key={todo.index}
            date={date}
            todo={todo} />
        ))
      }
    </div>
  )
};

export default App;
