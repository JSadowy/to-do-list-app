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
        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    Create New Task
                    <input type="text" value={newTask.taskName} onChange={(e) => handleNameChange(e.target.value)}></input>
                    <input type="date" value={newTask.taskDate} onChange={(e) => handleDateChange(e.target.value)}></input>
                </label>
            </p>
            <button type="submit">Add new task </button>
        </form>
    )
}