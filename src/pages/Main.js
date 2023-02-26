import { useState } from "react";
import { todoData } from "../constants/INITIAL_ITEMS";
import { ToDoListItem } from "../components/ToDoListItem";
import { CreateTaskForm } from "../components/CreateTaskForm";
import { useNavigate } from "react-router-dom";
import SortByDate from "../components/SortByDate";

export default function Main() {
  const [todo, setTodo] = useState(todoData);

  const handleCreateNewTask = (newTask) => {
    const newToDo = { title: newTask.taskName, date: newTask.taskDate };
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

      <div>
        <button>
          Sort
          <SortByDate />
        </button>
      </div>
      <div>
        <CreateTaskForm
          key={handleCreateNewTask}
          handleCreateNewTask={handleCreateNewTask}
        />
      </div>
    </div>
  );
}
