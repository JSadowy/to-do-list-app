import { todoData } from "../constants/INITIAL_ITEMS";
import { ToDoListItem } from "./ToDoListItem";

export default function SortByDate() {
    const dataOfInitialItemsDate = todoData.map(({ date }) => ({ date }));
    console.log(dataOfInitialItemsDate);

    // dataOfInitialItemsDate.sort((a, b) => a - b)
    return null;
}

