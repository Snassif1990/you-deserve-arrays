const prompt = require('prompt-sync')();

let array = JSON.parse(prompt("Enter an array of names:" ))

let itemThree = array[2];
let characterTwo = array[2].charAt(2);

if(array >= 2) {
    console.log("The second character in the third item in the array is " + characterTwo);
} else if(array < 2){
    console.log("ERROR")
}