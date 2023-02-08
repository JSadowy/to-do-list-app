import { useState } from "react"

export const CreateTask = ({ handleCreateNewTask }) => {
    const [newTask, setNewTask] = useState({
        taskName: [],
        taskDate: [],
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTask) {
            return;
        }
        handleCreateNewTask(newTask);
        setNewTask([])
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Create New Task
                <input type="text" value={newTask.taskName} onChange={(e) => setNewTask(e.target.value)}></input>
                <input type="date" value={newTask.taskDate} onChange={(e) => setNewTask.taskDate(e.target.value)}></input>
            </label>
            <button>Add new task </button>
        </form>
    )
}