const prompt = require('prompt-sync')();

let array = JSON.parse(prompt("Enter an array: "));

let itemOne = array[0];
let itemThree = array[2];
let itemLength = array.length;
let itemLast = array[itemLength-1];

if(array >= 3){
    console.log("The third index in the array is: " + itemThree)
} else if(array <=3) {
    console.log("The last index in the array is: " + itemLast)
}
