import { useState } from "react";
import { ToDoListItem } from "../components/ToDoListItem";
import { CreateTaskForm } from "../components/CreateTaskForm/CreateTaskForm";
import { useNavigate } from "react-router-dom";
import SortByDate from "../components/SortByDate";



export default function Main() {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(2);



  const handleCreateNewTask = (newTask) => {
    const newToDo = { id: counter + 1, title: newTask.taskName, date: newTask.taskDate };
    setCounter((prev) => prev + 1);
    setTodo((prev) => [...prev, newToDo]);
  };





  const navigate = useNavigate();
  function onClick() {
    navigate(-1);
  }
  return (
    <div id="main">
      <div id="return">
        <button id="return-button" onClick={onClick}>
          Back
        </button>
      </div>
      <ul>
        {todo.map((todo, index) => (
          <ToDoListItem key={index} todo={todo} />
        ))}
      </ul>
      <SortByDate todo={todo} setTodo={setTodo} />
      <div>
        <CreateTaskForm
          key={handleCreateNewTask}
          handleCreateNewTask={handleCreateNewTask}
        />
      </div>
    </div>
  );
}
