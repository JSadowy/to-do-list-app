import { useState } from "react"

export const CreateTask = ({ handleCreateNewTask }) => {
    const [newTask, setNewTask] = useState({
        taskName: '',
        taskDate: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTask) {
            return;
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Create New Task
                <input type="text" value={newTask.taskName} onChange={(e) => setNewTask.taskName(e.target.value)}></input>
                <input type="date" value={newTask.taskDate} onChange={(e) => setNewTask.taskDate(e.target.value)}></input>
            </label>
            <button>Add new task </button>
        </form>
    )
}