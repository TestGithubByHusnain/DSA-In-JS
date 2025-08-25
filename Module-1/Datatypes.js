// ----------------------
// 🔹 PRIMITIVE DATA TYPES
// ----------------------

// String
let fullName = "Husnain Akram"; // Text
console.log(typeof fullName, fullName); // string

// Number
let age = 22; // Integer
let price = 99.99; // Decimal
console.log(typeof age, age); // number
console.log(typeof price, price); // number

// Boolean
let isLoggedIn = true;
let hasAccess = false;
console.log(typeof isLoggedIn, isLoggedIn); // boolean

// Undefined
let notAssigned;
console.log(typeof notAssigned, notAssigned); // undefined

// Null (intentional empty value)
let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // object (quirk in JS)

// BigInt (for large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber, bigNumber); // bigint

// Symbol (unique identifier)
let uniqueId = Symbol("id");
console.log(typeof uniqueId, uniqueId); // symbol

// ----------------------
// 🔸 NON-PRIMITIVE / OBJECT DATA TYPES
// ----------------------

// Object (key-value pairs)
let person = {
  name: "Husnain",
  age: 22,
  isStudent: true,
};
console.log(typeof person, person); // object

// Array (ordered list)
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits, fruits); // object (arrays are special objects)

// Function (reusable code block)
function greet(name) {
  return "Hello, " + name;
}
console.log(typeof greet, greet("Ali")); // function

// Date (built-in object)
let today = new Date();
console.log(typeof today, today); // object

// Regular Expression (pattern matching)
let pattern = /hello/i;
console.log(typeof pattern, pattern); // object

// ----------------------
// ✅ typeof Summary
// ----------------------
console.log("\n🧠 Summary:");
console.log("String:", typeof fullName);
console.log("Number:", typeof age);
console.log("Boolean:", typeof isLoggedIn);
console.log("Undefined:", typeof notAssigned);
console.log("Null:", typeof emptyValue); // object
console.log("BigInt:", typeof bigNumber);
console.log("Symbol:", typeof uniqueId);
console.log("Object:", typeof person);
console.log("Array:", typeof fruits); // still object
console.log("Function:", typeof greet);
console.log("Date:", typeof today);
console.log("RegExp:", typeof pattern);
