const prompt = require('prompt-sync')();

let array = JSON.parse(prompt("Please enter an array: "));

let listOfTen = false;
let listLength = array.length;

if(array >= 10) {
    listOfTen = true;
    console.log("Your array lenth is at least 10")
} else if(array < 10) {
    listOfTen = false;
    console.log("Your arrays length is not at least 10")
}