export const ToDoListItem = ({ todo }) => {
    return (
        <li key={todo.title}>
            {todo.title} {todo.date}
        </li>
    )
}