import { useState } from 'react';
import { todoData } from '../constants/INITIAL_ITEMS';
import { ToDoListItem } from '../components/ToDoListItem'
import { CreateTaskForm } from '../components/CreateTaskForm';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const [todo, setTodo] = useState(todoData)

    const handleCreateNewTask = (newTask) => {
        const newToDo = { title: newTask.taskName, date: newTask.taskDate };
        setTodo(prev => [...prev, newToDo]);
    }

    const navigate = useNavigate();
    function onClick() {
        navigate(-1);
    };
    return (
        <div id="main">
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
            <div>
                <button>
                    Sort
                </button>
            </div>
            <div id='return'>
                <button onClick={onClick}>Back</button>
            </div>
        </div>
    )
};