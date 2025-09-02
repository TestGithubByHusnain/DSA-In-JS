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
//     console.log(` Outer loop value is:${i} `);
    
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
        console.log('Detected 5')
        // break 
        continue
    }
    console.log(`Value of i is ${index} `)
    
    
}