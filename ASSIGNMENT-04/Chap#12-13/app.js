// QNO1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
var check = prompt("Enter a character");
if (check >= "-10" && check <= "10") { alert("The input is a number."); }
else if (check >= "A" && check <= "Z") {
    alert("The input is a uppercase letter.");
}
else if (check >= "a" && check <= "z") {
    alert("The input is a lowercase letter.");
}
else { alert("Given input is a  number (-10 to 10), uppercase letter or lower case letter.") }
// QNO2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var firstinteger = +prompt("Enter a first integer value")
var secondinteger = +prompt("Enter a second integer value")
if (firstinteger > secondinteger) {
    alert("The greater integer is first integer");
}
else if (firstinteger < secondinteger) {
    alert("The greater integer is second integer");
}
else {
    alert("Both integers are Equal");
}
// QNO3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var number = prompt("Enter a number");
if (number > 0) { alert("The number is positive"); }
else if (number < 0) { alert("The number is negative"); }
else { alert("The number is zero"); }
// QNO4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var character = prompt("ENTER A VARIABLE");
if (character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u") 
    { alert("The character is a vowel");}
else { alert("The character is a consonant"); }
// QNO5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT
// Page 2 of 3
var correctPassword ="123456789";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}
// QNO6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}
// QNO7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
var time = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0o00 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time input.");
}