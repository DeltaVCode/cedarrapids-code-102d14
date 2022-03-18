'use strict';
console.log('app.js is connected.');

////////////////////////// lab 7//////////////////////
function userName(){
  let userName = prompt('What is your name?');
  return document.write(userName);
}


function timeOfDay() {
  let userTime = prompt('What time is it?');
  let message;
  if(userTime != 11){
    let userTime = prompt('What time is it?');
  } else {
    message = 'Thanks for the time.';
  } 
  return message;
  
}
////////////////////////// lab 7//////////////////////




////////////////////////// notes//////////////////////

// JavaScript - Coding language of the web. Used to create and control dynamic website content.

// conditionals - A series of checks that determine an outcome. If something happens, the do this. If that does not happen but this happens, do this. If all else fails, then do this last thing.

// operators - Series of symbols that perform arithmetic on numbers. (+, -, *, **, /, %. ++, --)
// modulus 3%5 = remainder
// 3/5 = 2

// data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array. 
// There are more advanced data types that will be introduced in 401.


// variable - a representation or nick name for some type of data.



How long would it take to print the numbers 0 to 100 using console.log? 
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Use a loop to run code many times
console.log("While loops require a starting variable, in this case a variable set to 0");
var count = 0;

console.log("This code will run the loop as long as the variable above is less than or equal to 50");
while(count <= 50) {
  console.log(count);
  count = count + 5;
}
console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");
// This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 40) {
  console.log(count);
  count = count - 2;
}

console.log("Count up from 0 to 60 by 10");
count = 0;
while(count <= 60) {
  console.log(count);
  count += 10;
}


// This loop will run forever, prompting the user to enter a number until they type 1. 
var stop = '1'; //SENTINAL
while(true){
  var input = prompt('Give a number. Type 1 to exit. ');
  if(input === stop) {
    break;
  }
// }
let myArray = ['craig', 49, [], {}, 1, 2, 3];
console.log(myArray);
////////////////////////// end notes and console demo//////////////////////





////////////////////////// lab 8//////////////////////


function guessANumber(){
  let answer;

 do {
   answer = prompt('Guess a number between 1-10');
   if(answer != 7){
     alert('try again!');
   } else {
     alert('you are correct!');
   }

 } while(answer != 7)
}



function displayRating(){
  let output = '';
  let rating = prompt('On a scale of 1-5, how many stars?');

  for(let i = 0; i < rating; i = i + 1){
   output = output +  '<img src="images/star.png" height="50px" width="50px">';
  }
   return document.write(output);
}


//invoke or call a function 
guessANumber();


////////////////////////// lab 7//////////////////////
