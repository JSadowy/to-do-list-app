import './App.css';
import { useState } from 'react';
import { todoData } from './constants/INITIAL_ITEMS';
import { ToDoListItem } from './components/ToDoListItem'
import { CreateTaskForm } from './components/CreateTaskForm';

function App() {
  const [todo, setTodo] = useState(todoData)

  const handleCreateNewTask = (newTask) => {
    const newToDo = { title: newTask.taskName, date: newTask.taskDate };
    setTodo(prev => [...prev, newToDo]);
  }
  return (
    <div className="App">
      <h1>To Do App</h1>
      <ul>
        {
          todo.map((todo, index) => (
            <ToDoListItem key={todo.index}
              todo={todo} />
          ))
        }
      </ul>
      <div>
        <CreateTaskForm key={handleCreateNewTask}
          handleCreateNewTask={handleCreateNewTask}
        />
      </div>
    </div>
  )
};

export default App;
