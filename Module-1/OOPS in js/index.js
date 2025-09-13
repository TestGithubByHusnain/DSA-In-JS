// Javascript and classes:
// A class in JavaScript is a blueprint for creating objects with shared properties and methods.
// Introduced in ES6 (2015), JavaScript classes are essentially syntactic sugar over the older prototype-based 
// inheritance system.

// OOP --> Object oriented programming.

// Object:
// -> Collection of properties and methods.

// -> Why use oop
// We use Object-Oriented Programming (OOP) in JavaScript to structure and organize code in a more modular,
//  reusable, scalable, and maintainable way.

// Parts of oop:
// Constructor function.
// Prototypes.
// Classes.
// Instances (new, this).

// 4 Pillars of oop :
// Abstraction.
// Encapsulation.
// Inheritance.
// Polymorphism. 


// Object literals:
const user = {
    username:"Husnain",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        
    }
}
console.log(user.signedIn);
console.log(user.getUserDetails());




