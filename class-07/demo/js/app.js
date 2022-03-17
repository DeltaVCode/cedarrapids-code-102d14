'use strict';
console.log('app.js is connected.');


// function functionName(){
//   console.log('we are in the function!!!!!!!!');
// }
// functionName();


function userName(){
  let userName = prompt('What is your name?');
  // console.log('userName is this =', userName);
  return document.write(userName);
}


function timeOfDay() {
  let userTime = prompt('What time is it?');
  let message;

  if(userTime <= 11){
    message = 'Good Morning';
  } else if(userTime <= 18){
    message = 'Good Afternoon';
  } else if (userTime <= 24){
    message = 'Good Evening';
  } else {
    message = 'Your input does not work for a time.';
  } 
  return message;
}

