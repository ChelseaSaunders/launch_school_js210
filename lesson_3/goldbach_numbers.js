/* Write a function named checkGoldbach that uses Goldbach's Conjecture to log 
  every pair of primes that sum to the number supplied as an argument. The 
  conjecture states that "you can express every even integer greater than 2 as 
  the sum of two primes". The function takes as its only parameter, an integer 
  expectedSum, and logs all combinations of two prime numbers whose sum is 
  expectedSum. Log the prime pairs with the smaller number first. If expectedSum 
  is odd or less than 4, your function should log null.

PROBLEM

EXPLICIT RULES
  if expectedSum is odd or less than 4, your function should log null.

IMPLICIT RULES

EXAMPLES

DATA
integers

ALGORITHM 

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

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let half = expectedSum / 2;

  for (let firstNum = 1; firstNum <= half; firstNum += 1) {
    let secondNum = expectedSum - firstNum;
    if (isPrime(firstNum) && isPrime(secondNum)) {
      console.log(`${firstNum} ${secondNum}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53