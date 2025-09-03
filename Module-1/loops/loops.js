// for loop
// if else inside loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5){
        // console.log("five is best number")
    }
    // console.log(element);
    
}

// Loop inside loop
// for (let i = 0; i <= 10; i++) {
//     console.log(` Outer loop value is:${i}c);
    
//     for (let j = 0; j <=10; j++) {
//  console.log(`Inner loop value is: ${j} and inner loop ${i}`);
      
        
//     }
    
// }

let myArray=["flash", "superman", "batman", "aquaman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}

// Break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log('Detected 5')
        // break 
        continue
    }
    // console.log(`Value of i is ${index} `)    
}

// While loop:
let index=1
while (index <=10) {
    // console.log(`Value of index is ${index}`);
    index= index + 2
}

// Do while loop
let score= 1
do {
    // console.log(`Value of score is ${score}`)
    score++
} while (score <= 10 );


// for of loop
let heroes = ["ironman", "captain america", "thor", "black panther"];
for (const hero of heroes) {
    // console.log(hero);
    
}

const greetings="Hello world"
for (const greet of greetings) {
    // console.log(`Each char is:${greet}`)
}

const myobject={
    js:"javascript",
    py:"python",
    rb:"ruby",
    java:"java"
}
for (const key in myobject) {
//    console.log(`${key} shortcut is for: ${myobject[key]}`)
}

const coding=["javascript", "python", "ruby", "java"]
coding.forEach(function(val){
    // console.log(val)
});

const myCoding =[
    {
        languageName:"javascript",
    languagefileExtension:".js"
    },
    {
        languageName:"python",
    languagefileExtension:".py"
    },
    {
        languageName:"ruby",
    languagefileExtension:".rb"
    }
]
myCoding.forEach((item) =>{
    
    console.log(item.languageName);
    
})