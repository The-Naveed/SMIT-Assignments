// Chapter 26 to 30

// 1. Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var positiveIntegers = prompt("Enter Any Positive Valeu","3.45214");


// document.write("<h1>Number" + " " + positiveIntegers + "<h1/>");
// document.write("<h1>Round Of Valeu" + " " + Math.round(positiveIntegers) + "<h1/>");
// document.write("<h1>Floor Valeu" + " " + Math.floor(positiveIntegers) + "<h1/>");
// document.write("<h1>Ceil Valeu" + " " + Math.ceil(positiveIntegers) + "<h1/>");


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var negativeNumbers = prompt("Enter Any Negative Number","-2.673");

// document.write("<h1>Number" + " " + negativeNumbers + "<h1/>");
// document.write("<h1>Round Of Valeu" + " " + Math.round(negativeNumbers) + "<h1/>");
// document.write("<h1>Floor Valeu" + " " + Math.floor(negativeNumbers) + "<h1/>");
// document.write("<h1>Ceil Valeu" + " " + Math.ceil(negativeNumbers) + "<h1/>");

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter Any Valeu To Get Absolute Valeu", "-4");
// document.write("<h1>The Absolute Valeu Of " + number + " Is " + Math.abs(number) + "<h1/>");

// var number = prompt("Enter Any Valeu To Get Absolute Valeu", "5");
// document.write("<h1>The Absolute Valeu Of " + number + " Is " + Math.abs(number) + "<h1/>");

// 4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

// var randomDiceValeu = prompt("Do Not Enter Any Thing", Math.floor(Math.random()*100)+1 ); 

// document.write("<h1> Random Dice Valeu " + (randomDiceValeu);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

// var randomNumber = Math.random(" ");

// if (randomNumber <= 0.5) {
//     document.write("<h1>Heads<h1/>")
// } else {
//     document.write("<h1>Tails<h1/>")
// };

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var randomNumbers = Math.floor(Math.random()*100);

// document.write("<h1>The Random Number Between 1 To 100 Is = " + randomNumbers)

// 7. Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser. 
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var userWeight = prompt("Enter Your Weight In Given Formats\n1. 50\n2. 50Kgs\n3. 50.2Kgs\n4. 50.2Kilograms" , Math.floor(Math.random("Enter Valeu Here")+50).toFixed(1));

// document.write(userWeight);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.

// var store = +prompt("Enter Any Number From 1 T0 10");

// if (store === 5) {
//     document.write("<h1>Congratulation You Enter A Lucky Number<h1/>");
// } else {
//     document.write("<h1>Enter Different Number<h1/>");
// }