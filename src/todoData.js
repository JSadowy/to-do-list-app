const date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

export const todoData = [
    {
        title: "Pay bills",
        completed: false,
        date: currentDate
    },
    {
        title: "Go shopping",
        completed: false,
        date: "11-02-2023"
    }
];