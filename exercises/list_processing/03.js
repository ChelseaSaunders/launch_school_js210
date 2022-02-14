"use strict"

// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
/// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let unique1 = findUnique(arr1);
  let unique2 = findUnique(arr2);
  let multiples = [];

  unique1.forEach((num1) => {
    unique2.forEach(num2 => multiples.push(num1 * num2));
  })

  return multiples.sort((a, b) => a - b);
}

function findUnique(arr) {
  let uniqueArr = []
  arr.forEach((el) => {
    if (!uniqueArr.includes(el)) uniqueArr.push(el);
  });
  return uniqueArr;
}

console.log(multiplyAllPairs([4, 2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]