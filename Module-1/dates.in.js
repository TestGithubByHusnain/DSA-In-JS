let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
console.log(myDate.toJSON())

// 1. Create Date Objects
const now = new Date();
console.log("Current Date & Time:", now);

const date1 = new Date('2025-08-26');
console.log("Specific Date (YYYY-MM-DD):", date1);

const date2 = new Date(2025, 7, 26); // Note: Month is 0-indexed
console.log("Specific Date (Y, M, D):", date2);

// 2. Get Parts of Date
console.log("\n-- Getting Date Parts --");
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date (1-31):", now.getDate());
console.log("Day (0=Sun):", now.getDay());
console.log("Hour (0-23):", now.getHours());
console.log("Minute:", now.getMinutes());
console.log("Second:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// 3. Set Parts of Date
const newDate = new Date();
newDate.setFullYear(2030);
newDate.setMonth(5); // June
newDate.setDate(15);
newDate.setHours(10);
newDate.setMinutes(30);
console.log("\n-- Modified Date --");
console.log(newDate);

// 4. Format Dates
console.log("\n-- Date Formatting --");
console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toISOString():", now.toISOString());

// 5. Timestamp
console.log("\n-- Timestamp --");
console.log("Date.now():", Date.now());
console.log("getTime():", now.getTime());

// 6. Date Difference
const d1 = new Date('2025-08-26');
const d2 = new Date('2025-09-01');
const diffMs = d2 - d1;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("\n-- Date Difference --");
console.log(`Difference in Days between ${d1.toDateString()} and ${d2.toDateString()}:`, diffDays);

// 7. Timezone Formatting
console.log("\n-- Timezone Format --");
console.log("Asia/Karachi:", now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
console.log("UTC:", now.toUTCString());


