// Question 1:
// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.
// for(let number = 0; number <= 10; number++){
//     if(number % 2 === 0){
//         console.log(number) //output => 0 2 4 6 8 10
//     }
// }

// Question 2:
// Write a JavaScript while loop that calculates the factorial of a given number.

// let number = 5;
// let j = 1;
// if(number === 0){
//     console.log(1)
// } else{
//     while(number >= 1){
//         j *= number;
//         number--;
//     }
//     console.log(j)
// }

// function factorial(n){
//     let number = 1;
//     for(let i = 1; i <= n; i++){
//         number *= i;
//     }
//     return number;
// }
// console.log(factorial(5)) //output => 120

// Question 3:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.
// let array = [1, 2, 3, 4, 5, 6]; //1+2  3 3+3 6 6+4 10 10+5 15 15+6 => 21
// let sum = 0;
// function sumArray(array){
//     for(let i = 0; i <= array.length; i++){
//         sum += i;
//     }
//     return sum;
// }
// let result = sumArray(array);
// console.log(result)


// Question 4:
// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.


// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.
// let classmate = ["akay", "neel", "chetan", "minhaaz"];

// function Buddy(classmate){
//         for(let i = 0; i < classmate.length; i++){
//             if(classmate[i].length > 5){
//                 console.log(classmate[i]);  //output => chetan minhaaz
//             }
//         }
// }
// Buddy(classmate);


// Question 6:
// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.
// function primeNumber(number){
//     if(number === 0 || number === 1){
//         console.log(`number ${number} is not a prime numebr`)
//     } else if(number > 1){
//         for(var i = 2; i <= number-1; i++){
//         if(number % i === 0){
//             var b = true;
//         }
//         // console.log(i)
//     }
//     if(b === true){
//         console.log("not a Prime NUmber")
//     } else{
//         console.log("Prime Number")
//     }
// }
// }
// primeNumber(20);


// Question 7:
// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
// let sum = 0;
// for(var number = 1; number <= 1000; number++){
//     if(number % 3 === 0 && number % 5 === 0){
//         sum += number;
//     }
// }
// console.log(sum)


// Question 8:
// Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.


// Question 9:

// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.

// Question 10:

// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.