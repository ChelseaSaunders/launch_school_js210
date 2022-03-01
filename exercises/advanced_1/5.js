"use strict"

// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

/*
rules:
2 arrays return one new array
new array contains values in order from lowest to highest (not just alternating
  values between the two arrays)
empty arrays are ignored--copy of non-empty array is returned


*/

// Examples:

function merge(arr1, arr2) {
  let merged = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx <= arr1.length && arr2Idx <= arr2.length) {
    if (arr1[arr1Idx] === undefined && arr2[arr2Idx] === undefined) {
      break;
    } else if (arr2[arr2Idx] === undefined || arr1[arr1Idx] <= arr2[arr2Idx]) {
      merged.push(arr1[arr1Idx]);
      arr1Idx += 1;

    } else {
      merged.push(arr2[arr2Idx]);
      arr2Idx += 1;
    }
  }

  return merged;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));          // [1, 1, 2, 2, 3]
console.log(merge([2, 2], [1, 1, 3]));          // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]