export const ToDoListItem = ({ todo, index }) => {
    return (
        <li key={todo.index}>
            {todo.title} {todo.date}
        </li>
    )
}