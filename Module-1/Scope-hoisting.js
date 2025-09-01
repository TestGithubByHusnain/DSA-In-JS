// Scope
let globalVar = "I am global"; // global scope

function testScope() {
  let functionVar = "I am function scoped";
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // ✅
  }
  console.log(functionVar); // ✅
  // console.log(blockVar); // ❌ Error
}

testScope();
console.log(globalVar); // ✅


// VAr hoisting:
console.log(name); // Output: undefined
var name = "Alice";
console.log(name); // Output: Alice


// Let and const hoisting
console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;
 

// Function hoisting:
greet(); // Output: Hello there!

function greet() {
  console.log("Hello there!");
}
