import React, { useState } from "react";


export default function SortByDate({ todo, setTodo }) {
    const [sortingType, setSortingType] = useState("DESC");
    const sort = () => {
        console.log(todo)

        todo.sort((a, b) => b.date > a.date ? (sortingType === "ASC" ? 1 : -1) : -1);

        setSortingType(sortingType === "DESC" ? "ASC" : "DESC");
        setTodo([...todo]);

    };
    return (
        <button type="submit" onClick={sort} className="sort-date-btn">
            Sort by date
        </button>
    )
}