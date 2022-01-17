/* Write a function that takes a number argument, and returns true if the number 
  is prime, or false if it is not.

You may assume that the input is always a non-negative integer.
Example

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let divisor = 2;divisor < num; divisor += 1) {;
    if (num % divisor === 0) return false;
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));