// // JS DSA => Test - 4 (7th June - Saturday)

// Question 1:
// Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.
// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0 && i !=10){
//     console.log(i)
//     }
// }

// let i = 0;
// while(i<=20){
//     if(i%2===0){
//         console.log(i)
//     }
//     i++;
// }

// Question 2:
// Write a JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.
// let i = 1;
// let fact = 1;
// while(i<=5){
//     fact *= i;
//     i++;
// }
// console.log(fact)

// Question 3:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.
// let array = [12, 11, 1, 2, 4]
// function findEvenNum(arrys){

//     let sum = 0;

//     for(let i = 0; i<arrys.length; i++){
//         if(arrys[i] % 2 === 0){
//             sum = sum + arrys[i];
//         }
    
//     }
//     console.log(sum)
// }
// findEvenNum(array);


// Question 4:
// Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array.


// Question 5:
// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 7 characters.
// let classmate = ["Ashkel", "Thor", "OikawaJosai", "ShoyoHinata"];

// function sportsTeam(classmate){
//         for(let i = 0; i < classmate.length; i++){
//             if(classmate[i].length > 7){
//                 console.log(classmate[i]);  //output => OikawaJosai, ShoyoHinata
                    
//             }
//         }
// }
// sportsTeam(classmate);


// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.


// Question 7:
// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.
function sumDiv() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}

let result = sumDiv();
console.log(result);


// Question 8:

// Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.

// Question 9:

// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase), numbers, and special characters.

// Question 10:

// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array.
