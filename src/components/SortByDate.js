import React, { useState } from "react";


function parseDateAndSort(a, b, sortingType) {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    console.log(aDate, bDate);
    return bDate > aDate ? (sortingType === "ASC" ? 1 : -1) : -1
}

export default function SortByDate({ setTodo }) {
    const [sortingType, setSortingType] = useState("DESC");
    const sort = () => {
        setSortingType(sortingType === "DESC" ? "ASC" : "DESC");
        setTodo(prev => [...prev].sort((a, b) => parseDateAndSort(a, b, sortingType)));
    };
    return (
        <button type="submit" onClick={sort} className="sort-date-btn">
            Sort by date
        </button>
    )
}