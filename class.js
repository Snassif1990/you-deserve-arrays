const prompt = require('prompt-sync')({sigint: true});

/* Array intro with numbers */
// let a = 1;
// let b = 2;
// let c = 3;

// let array = [a, b, c];

// console.log(array);

/* Arrays with strings */
let p1 = "Jim";
let p2 = "Bob";
let p3 = "Jack";

//           0   1   2   3
let names = [p1, p2, p3];

// console.log(names);

let firstItem = names[0];
let secondItem = names[1];
let thirdItem = names[2];

// console.log("The first name in the array is: " + firstItem);
// console.log("The second name in the array is: " + secondItem);
// console.log("The third name in the array is: " + thirdItem);
// console.log(names[3]);

/* Array Length */
let namesLength = names.length;

// console.log("The length of this array is: " + namesLength);

let lastItem = names[namesLength-1];

// console.log("The last name in this array is: " + lastItem);

/* Strings Work Like Arrays */
// let string = prompt("Enter a string: ");

// console.log("First character: " + string[0]);
// console.log("Second character: " + string[1]);

// console.log("Last character: " + string[string.length-1]);

//use double quotes ""
let userArray = prompt("Enter an array: ");

console.log("This is type: " + typeof userArray);

console.log("This is type: " + typeof JSON.parse(userArray));