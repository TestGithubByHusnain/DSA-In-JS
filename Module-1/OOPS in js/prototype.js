// function multiplyby5 (num){
//     return num*5
// }
// multiplyby5.power = 2

// console.log(multiplyby5(5).prototype);
// console.log(multiplyby5.power);

// function createuser(username, price){
//     this.username = username
//     this.price=price
// }
// createuser.prototype.increment = function(){
//     this.price++
// }
// createuser.prototype.printMe= function (){
//     console.log(`Price is ${this.price}`);
    
// }
// const chai=new createuser("chai", 25)
// const tea=createuser("tea", 250)

// chai.printMe()


// Here's what happens behind the scenes when the new keyword is used:
// A new object is created: The new keyword initiates the creation of a new javascript object.
// A prototype is linked: The newly created object gets linked to the prototype of the constructor function. This means
// that it has access to properties and methods defined on the constructor'ss prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to 
// the newly created object. If no explicitx return value i specified from the constructor. Js assumes this, the newly
// created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it does'nt return a non-primitive value(object,
// array, function etc.), the newly created object is returned.



// Prototype Section:
// let myName= "Husnain"
// console.log(myName.trueLength);

let myHeros =["thor", "spiderman"]

let heroPower= {
thor:"hammer",
spiderman:"sling",

getSpiderPower: function(){
console.log(`Spidy power is ${this.spiderman}`);
}}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects.`);
    
}
heroPower.hitesh()

