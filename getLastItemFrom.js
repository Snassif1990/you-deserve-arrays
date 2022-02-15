const prompt = require('prompt-sync')();

let string = prompt(" Enter a string: ");

console.log("Last item: " + string[string.length-1]);