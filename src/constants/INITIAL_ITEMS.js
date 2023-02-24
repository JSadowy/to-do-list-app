const date = new Date()
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}-${month >= 10 ? month : '0' + month}-${year}`;

export const todoData = [
    {
        title: "Pay bills",
        completed: false,
        date: currentDate,
    },
    {
        title: "Go shopping",
        completed: false,
        date: "11-02-2023",
    }
];