// Types of function 
// a) function declaration (Named Function))
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Output: 7

// b)Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6

// c) Arrow Functions (ES6)
const subtract = (a, b) => a - b;
console.log(subtract(5, 2)); // Output: 3

// d) Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE runs!");
})();  // Output: IIFE runs!

// Parameter vs arguments
function greet(name) { // name is a parameter
  console.log("Hi " + name);
}

greet("Zara"); // "Zara" is an argument

// 4. Return Statement
function square(x) {
  return x * x;
}

let result = square(5); // result = 25

// 5. Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest

// 6. Rest Parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// 7. Callback Functions

// Passing one function into another:

function process(callback) {
  callback("Data");
}

process(function(data) {
  console.log("Processing " + data);
});

// 8. Anonymous Function

// Function without a name:
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
