import './App.css';
import { useState } from 'react';
import { todoData } from './todoData';
import { ToDoDisplaying } from './Components/ToDoDisplaying'
import { CreateTask } from './Components/CreateTask';

function App() {
  const [todo, setTodo] = useState(todoData)

  const handleCreateNewTask = (newTask) => {
    const newToDos = [...todo, { title: newTask.taskName, date: newTask.taskDate }]
    setTodo(newToDos)
  }
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
      <div>
        <CreateTask handleCreateNewTask={handleCreateNewTask} />
      </div>
    </div>
  )
};

export default App;
