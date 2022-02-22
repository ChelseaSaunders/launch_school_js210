"use strict"

// Our recursive fibonacci function from the previous exercise is not very
// efficient. It starts slowing down with an nth argument value as low as 35.
// One way to improve the performance of our recursive fibonacci function (and
//   other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future
// reuse, instead of computing it from scratch every time it is needed. In the
// case of our recursive fibonacci function, using memoization saves calls to
// fibonacci(nth - 2) because the necessary values have already been computed by
// the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

// My solution:

// function fibonacci(num) {
//   let lastNum;
//   if (num <= 2) {
//     return 1;
//   } else {
//     lastNum = fibonacci(num - 1) + fibonacci(num - 2)
//     return lastNum;
//   }
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// LS solution:
// Solution

// const memo = {};

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   } else {
//     if (memo[nth]) {
//       return memo[nth];
//     } else {
//       memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
//       return memo[nth];
//     }
//   }
// }

// Discussion

// The main difference of this solution is the addition of the memo object. In
// the outer else clause, the solution uses the memo object to look up whether a
// previous computation has already been done for the nth value. If it has, the
// function immediately returns that value; otherwise, the function computes the
// nth value, stores the result in the memo object, and returns it.
// Further Exploration

// The current solution defines the memo object in the global scope. Can you use
// an IIFE (Immediately-Invoked Function Expression) to make memo private
// instead? If the concept of an IIFE is new to you, you may want to wait until
// after it is covered in course JS225 before doing this Further Exploration
// exercise.