// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = (3);

// var num2 = (5);

// document.write("<h1>Sum Of"+" "+num1+" "+"&"+" "+num2+" "+"Is"+" "+(num1+num2)+ "</h1>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// var num1 = (3);

// var num2 = (5);

// document.write("<h1>Sub Of"+" "+num1+" "+"&"+" "+num2+" "+"Is"+" "+(num1-num2)+ "</h1>");

// document.write("<h1>Div Of"+" "+num1+" "+"&"+" "+num2+" "+"Is"+" "+(num1/num2)+ "</h1>");

// document.write("<h1>Add Of"+" "+num1+" "+"&"+" "+num2+" "+"Is"+" "+(num1+num2)+ "</h1>");

// document.write("<h1>Mul Of"+" "+num1+" "+"&"+" "+num2+" "+"Is"+" "+(num1*num2)+ "</h1>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// a. Declare a variable.
// var num;

// b. Show the value of the variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is: " + num + "<br>");

// c. Initialize the variable with some number.
// num = 5;

// d. Show the value of the variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + num + "<br>");

// e. Increment the variable.
// num++;

// f. Show the value of the variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.
// num += 7;

// h. Show the value of the variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable.
// num--;

// j. Show the value of the variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
// var remainder = num % 3;

// l. Output : “The remainder is : 0”.
// document.write("The remainder is: " + remainder + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. Example output:

// var cost = (600);

// var qty = (5)

// cost *= qty;

// document.write("The Cost To Buy " + qty + " Tickets Is " + cost);

// 5. Write a script to display multiplication table of any number in your browser. E.g

// var num = (4)
// num *= 1
// document.write("4 X 1 = "+ num + "<br />");
// num += 4
// document.write("4 X 2 = "+ num + "<br />");
// num += 4
// document.write("4 X 3 = "+ num + "<br />");
// num += 4
// document.write("4 X 4 = "+ num + "<br />");
// num += 4
// document.write("4 X 5 = "+ num + "<br />");
// num += 4
// document.write("4 X 6 = "+ num + "<br />");
// num += 4
// document.write("4 X 7 = "+ num + "<br />");
// num += 4
// document.write("4 X 8 = "+ num + "<br />");
// num += 4
// document.write("4 X 9 = "+ num + "<br />");
// num += 4
// document.write("4 X 10 = "+ num + "<br />");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var cel = (25);

// var far = ((cel*9/5)+32);

// far = (70);

// var cel = ((far-32)*5/9);

// document.write(far + " is" + cel);

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables

// var item1 = (650);
// var item2 = (100);
// var qty1 = (3);
// var qty2 = (7);
// var charges = (100);

// item1 *= qty1
// item2 *= qty2

// document.write(item1+item2+qty1+qty2+charges);

// 8. Store total marks & marks obtained by a student in 2 variables.
// Compute the percentage & show the result in your browser

// var total = (980);
// var obtain = (804);

// var result = ((804/980)*100);

// document.write(result);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 
//     Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usd = (104);
// var sar = (28);
// var usdQty = (10);
// var sarQty = (25);

// var tusd = ((usd*usdQty));
// var tsar = ((sar*sarQty));

// var pkr = (tusd+tsar);
// document.write(pkr);

// 10. Write a program to initialize a variable with some number 
// and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression

// var num = 10;

// var result = ((num + 5)*10)/2;
// // alert(result)

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.

// var currentYear = 2024;
// var birthYear = 2000;

// var age = currentYear-birthYear;
// alert(age);

// 12. The Geometrizer: Calculate properties of a circle.

// var rad = (20)
// var cir = 2(3.142*rad)

// alert(cir);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var favSnack = "Zinger Burger";
// var currentAge = 24;
// var maxAge = 25;
// var estAmount = 1;
// var total = (currentAge*maxAge)
// alert(total)