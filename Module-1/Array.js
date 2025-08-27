const myArr =[0 ,1, 2, 3, 4, 5]
// Push method add element at the end of the array.
// myArr.push(6)

// Pop method remove elemnt from the end of the array.
// myArr.pop(5)

// Unshift method add element at the start of the array.
// myArr.unshift(-1)

// Shift method remove elemnt from the start of the array.
// myArr.shift()

// Includes method check if the element is present in the array or not and retuen boolean value.
// console.log(myArr.includes(3))

// Indexof method return thr index of the element if present in the array otherwise return -1.
// console.log(myArr.indexOf(3))

// Slice method return the part of the array from start index to end index but not include end index.
// const fruits = ['apple', 'banana', 'cherry', 'mango'];

// const sliced = fruits.slice(1, 3); // from index 1 to 2
// console.log(sliced);  // ['banana', 'cherry']
// console.log(fruits);  // original array not changed

// Splice method add or remove elemnt or replace elemnt in the array and it modifies the original array.
// Remove elemnt
// const colors = ['red', 'green', 'blue', 'yellow'];
// colors.splice(1, 2); // removes 2 items starting at index 1
// console.log(colors); // ['red', 'yellow']

// Add elemnt 
// const num = [1, 4, 5];
// num.splice(1, 0, 2, 3); // at index 1, remove 0, add 2 and 3
// console.log(num); // [1, 2, 3, 4, 5]

// Replace elemnts
// const items = ['a', 'b', 'c'];
// items.splice(1, 1, 'x', 'y'); // remove 1 at index 1, add 'x', 'y'
// console.log(items); // ['a', 'x', 'y', 'c']

// Spread opertaor (...) is used to expand an iterable (like an array or string) into individual elemnts.
let family=['Alice', 'Bob'];
let friends =['Charlie', 'David'];
const newgroup=[...family, ...friends];
console.log(newgroup)
console.log(myArr)
