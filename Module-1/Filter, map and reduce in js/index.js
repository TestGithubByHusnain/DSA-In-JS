// FILTER METHOD
// const coding =["js", "ruby", "python", "java", "c++", "html", "css"]

// const mynum =[1,2,3,4,5,6,7,8,9,10]
// const newnum= mynum.filter(  (num)=>num > 4 )
// const newnum= mynum.filter(  (num)=>{ return num > 4 })
// Here use return for {}, Becuae when we use {} we start scope.
// console.log(newnum);


// const books = [
//     {title: "Book One", genre:'history', author: "John Doe", year: 2009, rating: 4.5},
//     {title: "Book Two", genre: 'science', author: "Jane Smith", year: 2016, rating: 4.0},
//     {title: "Book Three",genre:'math', author: "Emily Johnson", year: 2010, rating: 3.5},
//     {title: "Book Four",genre:'history', author: "Michael Brown", year: 2018, rating: 4.8},
//     {title: "Book Five",genre:'literature', author: "Sarah Davis", year: 2014, rating: 4.2},
//     {title: "Book Six",genre:'history', author: "Danish", year: 2007, rating: 4.2},
// ];
// const userbooks = books.filter( (bk) => bk.genre === 'history' )
// const userbooks = books.filter( (bk) => bk.year >= 2011 && bk.genre === 'history'  )

// console.log(userbooks)


// Map method
// const mynumbers= [1,2,3,4,5,6,7,8,9,10]
// const newNums=mynumbers.map( (num) =>num + 10)
// Chaining of methods:

// const newNums = mynumbers
// .map( (num) => num * 10)
// .map( (num) => num + 1)
// .filter( (num) =>num > 50)
// console.log(newNums)


// Reduce method
// const mynumbers= [1,2,3,4,5,6,7,8,9,10]
// const newNums =mynumbers.reduce(function(acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
    
//     return acc + currval
// },0 )
// console.log(newNums);

const shoppingCart = [

{
    item: "Book",
    price: 9.99,
},
{
    item: "Pen",
    price: 1.99,
},
{
    item: "Notebook",
    price: 4.99,
}
]
const total= shoppingCart.reduce((acc, item) =>acc+ item.price, 0 )
// console.log(total)
const words = ["hello", "world"];
const countnumbers= words.reduce((acc, currval) => acc + currval.length,0)
console.log(countnumbers);


 

