import { todoData } from "../constants/INITIAL_ITEMS";

export default function SortByDate() {
    const dataOfInitialItemsDate = todoData.map(({ date }) => ({ date }));
    console.log(dataOfInitialItemsDate);

    // dataOfInitialItemsDate.sort((a, b) => a - b)
    return null;
}

