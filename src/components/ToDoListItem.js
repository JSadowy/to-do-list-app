export const ToDoListItem = ({ todo }) => {
    return (
        <li>
            {todo.title} {todo.date}
        </li>
    )
}