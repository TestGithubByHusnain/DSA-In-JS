const person = {
  name: "John",
  age: 30,
  isStudent: false
};

// Accessing object values
console.log(person.name);      // Dot notation → "John"
console.log(person['age']);    // Bracket notation → 30

// Updating and Adding Properties
person.age = 31;              // Update
person.country = "USA";       // Add new property

// Deleting Properties
delete person.isStudent;     // Removes the isStudent property

// Nested Objects
const car = {
  brand: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301
  }
};

console.log(car.engine.type);  // "V6"

// Objects with Methods (Functions as properties)
const user = {
  name: "Alice",
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(user.greet());  // "Hello, I'm Alice"

// Object.keys(), Object.values(), Object.entries()
Object.keys(person);    // ['name', 'age', 'country']
Object.values(person);  // ['John', 31, 'USA']
Object.entries(person); // [['name', 'John'], ['age', 31], ['country', 'USA']]

// Object Destructuring
const { name, age } = person;
console.log(name);  // John
console.log(age);   // 31

// Spread Operator with Objects
const newPerson = { ...person, gender: 'male' };

// Object.freeze
const user2 = {
  name: "Husnain",
  age: 22
};

Object.freeze(user2);

// Try to modify
user2.name = "Akram";         // ❌ Won't work
user2.city = "Lahore";        // ❌ Won't add
delete user2.age;             // ❌ Won't delete

console.log(user2);
// Output: { name: "Husnain", age: 22 }
