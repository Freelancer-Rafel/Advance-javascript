const number = [1, 2, 3, 4, 5, 6, 7, 8];
//const part = number.slice(2, 5);
const removed = number.splice(2, 3, 77, 55, 99);
// console.log(removed);
// console.log(number);

const joinTogather = number.join(",");
console.log(joinTogather);