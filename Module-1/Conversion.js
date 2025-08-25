// ------------------------------------------
// 🔄 JavaScript Type Conversions - Full Guide
// ------------------------------------------

// ------------------------------------------
// 1. Convert to String
// ------------------------------------------

// Using String()
let str1 = String(123);        // "123"
let str2 = String(true);       // "true"
let str3 = String(null);       // "null"
let str4 = String(undefined);  // "undefined"

console.log("// String Conversion");
console.log(typeof str1, str1); // string "123"
console.log(typeof str2, str2); // string "true"
console.log(typeof str3, str3); // string "null"
console.log(typeof str4, str4); // string "undefined"

// Using toString()
let num = 456;
let str5 = num.toString();     // "456"
console.log(typeof str5, str5); // string "456"

// ------------------------------------------
// 2. Convert to Number
// ------------------------------------------

// Using Number()
let num1 = Number("123");         // 123
let num2 = Number("123.45");      // 123.45
let num3 = Number("abc");         // NaN
let num4 = Number(true);          // 1
let num5 = Number(false);         // 0
let num6 = Number(null);          // 0
let num7 = Number(undefined);     // NaN

console.log("\n// Number Conversion");
console.log(typeof num1, num1); // number 123
console.log(typeof num2, num2); // number 123.45
console.log(typeof num3, num3); // number NaN
console.log(typeof num4, num4); // number 1
console.log(typeof num5, num5); // number 0
console.log(typeof num6, num6); // number 0
console.log(typeof num7, num7); // number NaN

// Using parseInt() and parseFloat()
let int1 = parseInt("100px");    // 100
let float1 = parseFloat("12.34"); // 12.34
console.log(int1);   // 100
console.log(float1); // 12.34

// Using unary plus (+)
let num8 = +"99";      // 99
let num9 = +true;      // 1
let num10 = +false;    // 0
let num11 = +"abc";    // NaN
console.log(num8, num9, num10, num11);

// ------------------------------------------
// 3. Convert to Boolean
// ------------------------------------------

// Using Boolean()
let bool1 = Boolean(1);         // true
let bool2 = Boolean(0);         // false
let bool3 = Boolean("hello");   // true
let bool4 = Boolean("");        // false
let bool5 = Boolean(null);      // false
let bool6 = Boolean(undefined); // false
let bool7 = Boolean(NaN);       // false
let bool8 = Boolean([]);        // true
let bool9 = Boolean({});        // true

console.log("\n// Boolean Conversion");
console.log(bool1, bool2, bool3, bool4, bool5, bool6, bool7, bool8, bool9);

// ------------------------------------------
// 4. Implicit Conversions (Type Coercion)
// ------------------------------------------

console.log("\n// Implicit Conversions");
console.log("5" + 1);    // "51" (number 1 → string)
console.log("5" - 1);    // 4   (string "5" → number)
console.log("5" * "2");  // 10  (both strings → numbers)
console.log(true + 1);   // 2   (true → 1)
console.log(false + 1);  // 1   (false → 0)
console.log(null + 1);   // 1   (null → 0)
console.log(undefined + 1); // NaN

// ------------------------------------------
// ✅ Summary of Type Conversion Functions
// ------------------------------------------

// String(value)     → Converts to string
// Number(value)     → Converts to number
// Boolean(value)    → Converts to boolean
// parseInt(string)  → Converts to integer
// parseFloat(string)→ Converts to float
// +value            → Shorthand number conversion

