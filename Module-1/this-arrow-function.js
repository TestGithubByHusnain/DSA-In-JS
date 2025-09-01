const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]


const person = {
  name: "Husnain",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is Husnain


// Implicit return
// const addtwo=(num1, num2)=> num1+num2;
// If you want to return an object wrap into in paranthesis
const addtwo=(num1, num2)=> ({num1,num2})

console.log(addtwo(5,6));

// Explicit return
const subtracttwo=(num1, num2)=>{
    return num1-num2
}
console.log(subtracttwo(6,6));


// IIFE
(function Husnain(){
console.log("Husnain");
})();


const result = (() => {
  let x = 10;
  let y = 20;
  return x + y;
})();

console.log(result); // 30
// Note: Arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding lexical scope.

