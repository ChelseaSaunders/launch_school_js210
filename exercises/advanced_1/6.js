"use strict"

// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested subarrays
// back together in sorted order. It is best explained with an example. Given
// the array [9, 5, 7, 1], let's walk through the process of sorting it with
// merge sort. We'll start off by breaking the array down into nested subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function should
// sort the array using the merge sort algorithm as described above. You may
// assume that every element of the array will be of the same data type—either
// all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

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

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]