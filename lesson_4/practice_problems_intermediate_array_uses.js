/* Write a function that creates and returns a new array from its array 
  argument. The new array should contain all values from the argument array 
  whose positions have an odd index. */

function oddElementsOf(arr) {
  let oddElementArr = []
    for (let index = 1; index < arr.length; index += 2) {
      oddElementArr.push(arr[index]);
    }
  return oddElementArr;
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

/* Write a function that takes an array argument and returns a new array that 
  contains all the argument's elements in their original order followed by all 
  the argument's elements in reverse order. */

function forwardAndBackwardArray(arr) {
  let newArr = arr.slice();

  for (let index = arr.length -1; index >= 0; index -= 1) {
    newArr.push(arr[index]);
  }

  return newArr;
}

/* LS's better solution:
function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}
*/

// console.log(forwardAndBackwardArray([1, 2, 3, 4, 5]));
// console.log(forwardAndBackwardArray([1, 2]));
// console.log(forwardAndBackwardArray([1]));

/* Use the array sort method to create a function that takes an array of numbers 
  and returns a new array of the numbers sorted in descending order. Do not 
  alter the original array. */

// function sortDescending(arr) {
//   let newArr = arr.slice();
//   return newArr.sort((firstEl, secondEl) => secondEl - firstEl);
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

/* Write a function that takes an array of arrays as an argument, and returns a 
  new array that contains the sums of each of the sub-arrays. */

// function matrixSums(arr) {
//   return arr.map(subarray => subarray.reduce((num1, num2) => num1 + num2));
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

/* Write a function that takes an array, and returns a new array with duplicate 
  elements removed. */

function uniqueElements(arr) {
  let newArr = []

  arr.forEach((element) => {
    if (!newArr.includes(element)) { 
      newArr.push(element);
    }
  })

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]