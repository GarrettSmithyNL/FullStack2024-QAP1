/*
 * Description: Examples of the os module for QAP 1 task 1
 * All Outputs are dependent on the system the code is run on
 * By: Garrett Smith
 * Date: 05/21/2024
 */

// Make sure the os module is loaded
const os = require("os");

// Get the hostname of the machine
let hostName = os.hostname();

// Get the operating system
let operatingSystem = os.type();

// Get the total memory in bytes
let totalMemory = os.totalmem();

// Get the free memory in bytes
let freeMemory = os.freemem();

// Get the uptime in seconds
let upTime = os.uptime();

// Convert the memory to GB
let totalMemoryInGB = Math.round(totalMemory / 1024 / 1024 / 1024);

// Convert the free memory to GB
let freeMemoryInGB = Math.round(freeMemory / 1024 / 1024 / 1024);

// Calculate the memory used in GB
let memoryUsed = totalMemoryInGB - freeMemoryInGB;

// Calculate the memory used percentage
let memoryUsedPercentage = Math.round((memoryUsed / totalMemoryInGB) * 100);

// Convert the uptime to days
let upTimeInDays = Math.round(upTime / 60 / 60 / 24);

// Output the information
console.log(`Hello USER! \nYour computers name is: ${hostName}.`);
// Output: Hello USER! Your computers name is: ${hostName}.

console.log(`Your using operating System: ${operatingSystem}.`);
// Output: Your using operating System: ${operatingSystem}.

console.log(
  `You are using ${memoryUsed} GB out of the total ${totalMemoryInGB} GB. (${memoryUsedPercentage}%)`
);
// Output: You are using ${memoryUsed} GB out of the total ${totalMemoryInGB} GB. (${memoryUsedPercentage}%)

console.log(`You have ${freeMemoryInGB} GB free to use.`);
// Output: You have ${freeMemoryInGB} GB free to use.

// Check if the memory usage is high
if (memoryUsedPercentage > 80) {
  console.log("You should probably close chrome!");
}

// Output the uptime
console.log(`Your computer has been on for ${upTimeInDays} days`);
// Output: Your computer has been on for ${upTimeInDays} days

// Check if the uptime is more than 2 days
if (upTimeInDays > 2) {
  console.log("You should restart your computer!");
}
