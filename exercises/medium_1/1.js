"use strict"

// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.


/*
Problem:
Take an array, and return a new array where the first element from the input
array is the last element in the new array, and all other elements are in
the same place in both arrays.
If an input is not an array, return undefined
If an input is an empty array, return an empty array
if only one element, array stays the same
properties should be in new array; not considered for rotate process

Data:
input: should be an array (return undefined if not);
output: new array

ALGO:
if statement: if !Array.isArray(input) return false
make a copy assign to rotatedArray
if the legnth of rotdatedArray <= 1 return rotated array
call array. slice(1).and concatenate the first element of the original to the returned
array
return the new array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined



// the input array is not mutated
const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);
                                // [1, 2, 3, 4]
let arrayWithExtraPoperties = [];
arrayWithExtraPoperties.test = 1;
arrayWithExtraPoperties[0] = 2;
arrayWithExtraPoperties[1] = 3;
arrayWithExtraPoperties[2] = 4;

console.log(rotateArray(arrayWithExtraPoperties)); // [3, 4, 2, test: 1]

let sparseArray = [];
sparseArray[1] = 1;
sparseArray[2] = 2;

console.log(rotateArray(sparseArray)); // [1, 2, <empty element>]