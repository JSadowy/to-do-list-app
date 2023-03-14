import { useState } from "react";
import { formatDate } from "../../utils/Date";

const defaultValues = {
  taskName: "",
  taskDate: "",
};

export const CreateTaskForm = ({ handleCreateNewTask }) => {
  const [newTask, setNewTask] = useState(defaultValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) {
      return;
    }
    handleCreateNewTask({ ...newTask, taskDate: formatDate(newTask.taskDate) });
    setNewTask({ ...defaultValues });
  };

  function handleNameChange(newText) {
    setNewTask((prev) => ({ ...prev, taskName: newText }));
  }

  function handleDateChange(newDate) {
    setNewTask((prev) => ({ ...prev, taskDate: newDate }));
  }

  function validateForm() {

    return (newTask.taskName !== '' && newTask.taskDate !== '');

  }

  return (
    <form className="new-task-form" data-testid="form" onSubmit={handleSubmit}>
      <span className="new-task">Create New Task </span>
      <label htmlFor="task-name">Task</label>
      <input
        name="task-name"
        id="task-name"
        type="text"
        value={newTask.taskName}
        onChange={(e) => handleNameChange(e.target.value)}
      ></input>
      <label htmlFor="task-date">Date</label>
      <input
        name="task-date"
        id="task-date"
        type="date"
        value={newTask.taskDate}
        onChange={(e) => handleDateChange(e.target.value)}
      ></input>

      <button id="submit-button" type="submit" disabled={!validateForm()} >
        Add new task
      </button>
    </form >
  );
};
