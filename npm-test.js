/*
  Description: This file is a test file for the npm package manager. It uses the moment.js and validator.js packages to show how to use them.
  All Outputs are dependent on the system the code is run on
  By: Garrett Smith
  Date: 05/21/2024
*/

const Moment = require("moment");
const Validator = require("validator");

// Get the current date
let today = Moment();
// Add 7 days to the current date
let sameDayNextWeek = today.clone().add(7, "days");
// Get the start of the month
let startOfMonth = today.clone().startOf("month");
// Get the current time
let nowTime = today.clone().format("HH:mm:ss");

console.log("\nYou can do date operations with moment.js");

// Shows the current date
console.log("Todays Date: " + today.format("DD-MM-YYYY"));
// Output: Todays Date: ${todaysDate} format: DD-MM-YYYY

// Shows the current day of the week
console.log("You can see what day of the week it is: " + today.format("dddd"));
// Output: You can see what day of the week it is: ${dayOfTheWeek}

// Shows the date 7 days from now
console.log(
  "What the date would be 7 days from now: " +
    sameDayNextWeek.format("DD-MM-YYYY")
);
// Output: Date of 7 days from now: ${dateOf7DaysFromNow} format: DD-MM-YYYY

// Shows the start of the month
console.log("Start of the month: " + startOfMonth.format("DD-MM-YYYY"));
// Output: Start of the month: ${dateofStartOfMonth} format: DD-MM-YYYY

// Shows the day of the week the start of the month is
console.log(
  "And see what day of the week the start of the month is: " +
    startOfMonth.format("dddd")
);
// Output: And see what day of the week the start of the month is: ${dayOfTheWeekOfStartOfMonth}

// Shows how much time has passed since the start of the month
console.log(
  "You can see how much time has passed since the start of the month: " +
    startOfMonth.fromNow()
);
// Output: You can see how much time has passed since the start of the month: ${timeSinceStartOfMonth}

console.log("You can even do time");
// Shows the current time
console.log("Current Time: " + nowTime);
// Output: Current Time: ${currentTime} format: HH:mm:ss

console.log("\nYou can do validation with validator.js");
let email = "test@email.com";
let email2 = "testemail.com";
let url = "https://www.google.com";
let url2 = "google";
let url3 = "google.com";
let url4 = "https://google.com";
let date1 = new Date(10, 10, 10);
let date2 = new Date(10, 10, 82);

// Shows if the email is valid
console.log("Is " + email + " a valid email? " + Validator.isEmail(email));
// Output: Is ${email} a valid email? true

// Shows if the email is valid
console.log("Is " + email2 + " a valid email? " + Validator.isEmail(email2));
// Output: Is ${email2} a valid email? false

// Shows if the URL is valid
console.log("Is " + url + " a valid URL? " + Validator.isURL(url));
// Output: Is ${url} a valid URL? true

// Shows if the URL is valid
console.log("Is " + url2 + " a valid URL? " + Validator.isURL(url2));
// Output: Is ${url2} a valid URL? false

// Shows if the URL is valid
console.log("Is " + url3 + " a valid URL? " + Validator.isURL(url3));
// Output: Is ${url3} a valid URL? false

// Shows if the URL is valid
console.log("Is " + url4 + " a valid URL? " + Validator.isURL(url4));
// Output: Is ${url4} a valid URL? true

// Shows if the date is valid
console.log("Is " + date1 + " a valid date? " + Validator.isDate(date1));
// Output: Is ${date} a valid date? true

// Shows if the date is valid
console.log("Is " + date2 + " a valid date? " + Validator.isDate(date2));
// Output: Is ${date2} a valid date? false

// Shows if one date id before another
console.log(
  "Is " +
    date1 +
    " before " +
    date2 +
    "? " +
    Validator.isBefore(date1.toString(), date2.toString())
);
// Output: Is ${date1} before ${date2}? true

// Shows if two strings are equal
console.log(
  "Are " +
    email +
    " and " +
    email2 +
    " equal? " +
    Validator.equals(email, email2)
);
// Output: Are ${email} and ${email2} equal? false
