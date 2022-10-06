const students = [
    {id: 1, name: "Md"},
    {id: 2, name: "Saiful"},
    {id: 3, name: "Islam"},
    {id: 4, name: "Rafel"}
];

const names = students.map(s => s.name);
const ids = students.map(i => i.id);
const bigger = students.filter(b => b.id > 3)
const biggerOne = students.find(b => b.id > 3)
console.log(biggerOne);