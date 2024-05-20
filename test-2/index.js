//map()
// const flower = [2, 4, 6, 8];
// const flw = flower.map((ele) => ele + 3);
// console.log(flw);

// Q. 1=> Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
// input: [1, 2, 3, 4, 5]

//Sol:-
// function squareArray(arr) {
//   const squaredNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     squaredNumbers.push(arr[i] * arr[i]);
//   }
//   return squaredNumbers;
// }

// const numbers = [1, 2, 3, 4, 5];
// const squared = squareArray(numbers);
// console.log(squared); // Output: [1, 4, 9, 16, 25]

// Q.2 => Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Sol:-

//   function isPalindrome(name) {
//     const reversed = name.split('').reverse().join('');
//     return name === reversed;
// }
// console.log(isPalindrome("tenet")); // True
// console.log(isPalindrome("mama")); // False


// Q.3 => Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Sol:-
//syntax=> array.filter(function(currentValue, index, arr), thisValue)

// function findIntersection(arr1, arr2) {
//   // Use filter and includes method
//   return arr1.filter(value => arr2.includes(value));
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const intersection = findIntersection(array1, array2);
// console.log(intersection); // Output: [3, 4]


// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.
// Input: {name: "Alice", age: 25}, "name"
// Sol:-

// function getValue(obj, key, defaultValue = undefined) {
//   // Check if the key exists in the object
//   if (key in obj) {
//       return obj[key];
//   } else {
//       return defaultValue;
//   }
// }

// const person = { name: "Alice", age: 25 };
// const key1 = "name";
// const key2 = "address";

// console.log(getValue(person, key1)); // Output: "Alice"
// console.log(getValue(person, key2)); // Output: undefined (default value)




// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.
// Input: 12345
// Sol:-

// function getDigits(number) {
//   const numberString = number.toString();
//   const digitsArray = [];
//   for (let i = 0; i < numberString.length; i++) {
//       digitsArray.push(Number(numberString[i]));
//   }
//   return digitsArray;
// }
// const inputNumber = 12345;
// const digits = getDigits(inputNumber);

// console.log(digits); // Output: [1, 2, 3, 4, 5]



// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
// Input: "hello"
// Sol:-

// function dupChar(inputString) {
//   let dupString = "";
//   for (let i = 0; i < inputString.length; i++) {
//       dupString += inputString[i] + inputString[i];
//   }

//   return dupString; 
// }

// const input = "hello";
// const output = dupChar(input);

// console.log(output); // Output: "hheelllloo"



// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.
// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

var obj = [{name:"Alice"},{name:"Bob"},{name:"Charlie"}];
function getKeyValue(){
    for (let key in obj) {
        console.log(obj[key]);
      }
}
getKeyValue(obj);


// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.
// Input: "This is a sample sentence."



// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
// Input: [10, 2, 14, 5, 7]

array=[10, 2, 14, 5, 7];
function secondSmall(array){
    array.sort((a,b)=>a-b);
    return array[1];
}

console.log(secondSmall(array));



// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".
// Input: new Date(2024, 4, 15)


