// Basic methods
let str = "Husnain";
str.length       // 7
str.charAt(0)    // "H"
str.charCodeAt(0) // 72
str.at(-1)       // "n"

// Search methods
let msg = "Hello JavaScript";

msg.indexOf("Java")      // 6
msg.includes("Script")   // true
msg.startsWith("Hello")  // true
msg.endsWith("pt")       // true

// Modify/Transform String
let text = "   Hello JS   ";

text.trim()              // "Hello JS"
text.toUpperCase()       // "   HELLO JS   "
text.replace("JS", "JavaScript") // "   Hello JavaScript   "
"Hi".repeat(3)           // "HiHiHi"

// Extracting substrings
let str2 = "JavaScript";

str2.slice(0, 4)     // "Java"
str2.substring(4, 10) // "Script"
str2.slice(-6)       // "Script"

// Splitting and joinning
let sentence = "Hello,World";

sentence.split(",")   // ["Hello", "World"]
"Hello".concat(" World") // "Hello World"
