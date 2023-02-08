export const ToDoDisplaying = ({ todo, index }) => {
    return (
        <div>
            {todo.title} {todo.date}
        </div>
    )
}