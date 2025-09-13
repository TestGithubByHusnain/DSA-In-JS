// Es6

// class User{
//     constructor(username, email, password){
//         this.username= username,
//         this.email= email,
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// changeusername(){
//     return `${this.username.toUpperCase()}`
// }
// }
// const chai= new User("chai", "chai234@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());



// BTS
// function User(username, email, password){
//           this.username= username,
//         this.email= email,
//         this.password = password
// }
// User.prototype.encryptPassword = function (){
//      return `${this.password}abc`
// }
// User.prototype.changeusername= function(){
//   return `${this.username.toUpperCase()}`
// }
// const tea= new User("tea", "tea234@gmail.com", "123")
// console.log(tea.encryptPassword());
// console.log(tea.changeusername());


// Inheritance:
// class User {
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
// console.log(`USERNAME is ${this.username}`);
//     }
// }
// class Teacher extends User {
//     constructor(username, email, password){
//          super(username)
//         this.email=email,
//         this.password=password
//     }
// addCourse(){
//     console.log(`A new course was added by ${this.username}`);
    
// }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")
// chai.addCourse()

// const masalaChai = new User("masalachai")


// StaticProps:
class User{
    constructor(username){
        this.username=username
    }
logMe(){
    console.log(`Username: ${this.username}`);
}
static createId(){
    return `1234`
}
}
// const husnain = new User("husnain")
// console.log(husnain.createId())

class Teacher extends User{
    constructor(username, email){
super(username)
        this.email=email
    }
}
const iphone =new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

