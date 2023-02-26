import { useState } from "react"

const defaultValues = {
    taskName: "",
    taskDate: "",
}

export const CreateTaskForm = ({ handleCreateNewTask }) => {
    const [newTask, setNewTask] = useState(defaultValues);
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTask) {
            return;
        }
        handleCreateNewTask(newTask);
        setNewTask({ ...defaultValues })
    }

    function handleNameChange(newText) {
        setNewTask(prev => ({ ...prev, taskName: newText }))
    }

    function handleDateChange(newDate) {
        setNewTask(prev => ({ ...prev, taskDate: newDate }))
    }


    return (
        <form className="new-task-form" onSubmit={handleSubmit}>

            <span className="new-task">Create New Task </span>
            <label htmlFor="task-name">Task</label>
            <input type="text" value={newTask.taskName} onChange={(e) => handleNameChange(e.target.value)}></input>
            <label htmlFor="task-date">Date</label>
            <input type="date" value={newTask.taskDate} onChange={(e) => handleDateChange(e.target.value)}></input>

            <button id="submit-button" type="submit">Add new task </button>
        </form>
    )
}
