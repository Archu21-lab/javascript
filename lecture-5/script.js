//wap to find max/min from 5 numbers using ladder if else statement
let a = 10;
let b = 20;
let c = 5;
let d = 15;
let e = 25;

if (a > b && a > c && a > d && a > e) {
    console.log("a is the maximum: ");
}else if (b > a && b > c && b > d && b > e) {
    console.log("b is the maximum: ");
}else if (c > a && c > b && c > d && c > e) {
    console.log("c is the maximum: ");
}else if (d > a && d > b && d > c && d > e) {
   console.log("d is the maximum")
}else {
    console.log("e is the maximum: ");
}   

if (a < b && a < c && a < d && a < e) {
    console.log("a is the minimum: ");
}else if (b < a && b < c && b < d && b < e) {
    console.log("b is the minimum: ");
}else if (c < a && c < b && c < d && c < e) {
    console.log("c is the minimum: ");
}else if (d < a && d < b && d < c && d < e) {
    console.log("d is the minimum: ");
}else {
    console.log("e is the minimum: ");
    
}   
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to find  grade based on percentage of 5 user given marks out of 100 using ladder if else statement
let marks=85;
if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
}else if (marks >= 80 && marks < 90) {
    console.log("Grade B");
}else if (marks >= 70 && marks < 80) {
    console.log("Grade C");
}else if (marks >= 60 && marks < 70) {
    console.log("Grade D");
}else {
    console.log("fail");
}   

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to calculate electricity bill using ladder if else statement
let units = 350;
let billAmount = 0; 
if (units <= 100) {
    billAmount = units * 5;
}
else if (units > 100 && units <= 200) {
    billAmount = (100 * 5) + ((units - 100) * 7);
}
else if (units > 200 && units <= 300) {
    billAmount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
else {
    billAmount = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 15);
}
console.log("Electricity Bill Amount: " + billAmount);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

//wap to check number divisible by 7 or not using  ladder if else statement.
let num = 49;
if (num % 7 === 0) {
    console.log(num + " is divisible by 7.");   
} else {
    
    console.log(num + " is not divisible by 7.");
}   

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to check  number is even or odd using ladder if else statement
let number = 15;
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
    
}       
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to check user is eligible or not using ternary operator
let age = 18;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log("User is: " + eligibility);


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to check number is neutral, negative and positive using ternary operator.
let num1 = -5;
let result = (num1 > 0) ? "Positive" : (num1 < 0) ? "Negative" : "Neutral";
console.log(num1 + " is a " + result + " number.");

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to display month name by count of month using switch case statement
let monthNumber = 4;
let monthName;
switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month number";
}
console.log("Month Name: " + monthName);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//wap to display message based on grade using switch case statement
let grade = 'B';
let message;
switch (grade) {
    case 'A':
        message = "Excellent!";
        break;
    case 'B':
        message = "Good";
        break;
    case 'C':
        message = "Well done";
        break;
    case 'D':
        message = "poor";
        break;
    case 'F':
        message = "Better luck next time!";
        break;
    default:
        message = "Invalid grade";
}
console.log("Grade: " + grade + " - " + message);