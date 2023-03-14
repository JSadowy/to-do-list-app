import React, { useState } from "react";


export default function SortByDate({ setTodo }) {
    const [sortingType, setSortingType] = useState("DESC");
    const sort = () => {
        setSortingType(sortingType === "DESC" ? "ASC" : "DESC");
        setTodo(prev => [...prev].sort((a, b) => b.date > a.date ? (sortingType === "ASC" ? 1 : -1) : -1));
    };
    return (
        <button type="submit" onClick={sort} className="sort-date-btn">
            Sort by date
        </button>
    )
}