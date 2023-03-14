import { useState } from "react";
import { ToDoListItem } from "../components/ToDoListItem";
import { CreateTaskForm } from "../components/CreateTaskForm/CreateTaskForm";
import { useNavigate } from "react-router-dom";
import SortByDate from "../components/SortByDate";
import { todoData } from "../constants/INITIAL_ITEMS";



export default function Main() {
  const [todo, setTodo] = useState(todoData);
  const [counter, setCounter] = useState(0);



  const handleCreateNewTask = (newTask) => {
    const newToDo = { id: counter + 1, title: newTask.taskName, date: newTask.taskDate };
    setCounter((prev) => prev + 1);
    setTodo((prev) => [...prev, newToDo]);
  };

  const deleteTask = (id) => {
    setTodo((prev) => {
      const filteredTodo = prev.filter((newTodo) => newTodo.id !== id)
      return filteredTodo;
    });
  }



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

      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
          {todo.map((todo, index) => (
            <ToDoListItem deleteTask={deleteTask} key={index} todo={todo} />
          ))}

        </tbody>
      </table>
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
