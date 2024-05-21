/*
 * Description: Examples of the buffer module for QAP 1 task 1 step 2b
 * By: Garrett Smith
 * Date: 05/21/2024
 */

// No need to load the buffer module, it is built in to node.js

// Create a buffer from a string
let buffer1 = Buffer.from("Hello");

// Create a buffer with a size of 10 bytes
// This will create a buffer with 10 empty bytes
// Buffers are fixed size, so you cannot change the size of the buffer
let buffer2 = Buffer.alloc(10);

// Write a string to the buffer
// This will write the string to the buffer starting at the first byte
// The rest of the buffer will be empty
buffer2.write("World");

// Output the buffers as strings
console.log("Buffer 1 as String: ");
console.log(buffer1.toString());
console.log("Buffer 2 as String: ");
console.log(buffer2.toString());

// Output the buffer as an array of bytes
// This will output the ASCII values of the characters
// the output will also show the empty bytes in the buffer
console.log("Buffer 1 as Bytes: ");
console.log(buffer1);
console.log("Buffer 2 as Bytes: ");
console.log(buffer2);

// Concatenate the two buffers
console.log("Concatenating the two buffers into buffer 3");
let buffer3 = Buffer.concat([buffer1, buffer2]);

// Output the concatenated buffer as a string
console.log("Buffer 3 as String: ");
console.log(buffer3.toString());

// Output the concatenated buffer as an array of bytes
// This will also show the empty bytes in the buffer from the second buffer
console.log("Buffer 3 as Bytes: ");
console.log(buffer3);

// Checks if the buffer is equal to another buffer
console.log("Checking if buffer 1 is equal to buffer 2");
if (buffer1.equals(buffer2)) {
  console.log("The buffers are equal");
} else {
  console.log("The buffers are not equal");
}

//
