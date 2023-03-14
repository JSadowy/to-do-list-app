export const ToDoListItem = ({ todo, deleteTask }) => {
    return (
        <tr key={todo.index}>
            <td>{todo.title}</td>
            <td>{todo.date}</td>
            <td className="delete-btn" onClick={() => deleteTask(todo.id)}>Delete</td>
        </tr>
    )
}