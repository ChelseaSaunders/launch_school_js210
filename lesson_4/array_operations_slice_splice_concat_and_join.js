/* Write a function named slice that accepts three arguments: an Array, a start 
  index, and an end index. The function should return a new Array that contains 
  values from the original Array starting with the value at the starting index, 
  and including all values up to but not including the end index. Do not modify 
  the original Array.

  You may use functions that were answers to previous practice problems to 
  complete this problem, but do not use any built-in Array methods. */

// earlier function needed for this function:

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

// current function solution:
function slice(array, startIndex, endIndex) {
  let slicedArray = []

  for (let index = startIndex; index < endIndex; index += 1) {
    push(slicedArray, array[index]);
  }

  return slicedArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

/* Write a function named splice that accepts three arguments: an Array, a start 
  index, and the number of values to remove. The function should remove values 
  from the original Array, starting with the first index and removing the 
  specified number of values. The function should return the removed values in a 
  new Array.

  You may use functions that were answers to previous practice problems to 
  complete this problem, but do not use any built-in Array methods. */

function splice(array, startIndex, sliceLength) {
  let spliceArray = [];
  let tempArray = [];
  let maxIndex = startIndex + sliceLength;

  for (let index = 0; index < array.length; index += 1) {
    if (index >= startIndex && index < maxIndex) {
      push(spliceArray, array[index]);
    } else {
      push(tempArray, array[index]);
    }
  }

  array.length = tempArray.length;

  for (let index = 0; index < tempArray.length; index += 1) {
    array[index] =  tempArray[index];
  }

  return spliceArray;
}

/* LS's better solution:

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

*/

let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

/* Write a function named concat that accepts two Array arguments. The function 
  should return a new Array that contains the values from each of the original 
  Arrays.

  You may use functions that were answers to previous practice problems to 
  complete this problem, but do not use any built-in Array methods. */

function concat(array1, array2) {
  let concatArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    concatArray[index] = array1[index];
  }
  
  for (let index = 0; index < array2.length; index += 1){
    let nextConcatIndex = concatArray.length;
    concatArray[nextConcatIndex] = array2[index];
  }

  return concatArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ])

/* Write a function named join that accepts two arguments: an Array and a 
  String. The function should coerce each value in the Array to a String, and 
  then join those values together using the second argument as a separator. You 
  may assume that a separator will always be passed.

  You can call the String function on any JavaScript value to get its String 
  representation. */

function join(array, joinString) {
  let newString = String(array[0]);

  for (let index = 1; index < array.length; index += 1) {
    newString += joinString;
    newString += String(array[index]);
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
