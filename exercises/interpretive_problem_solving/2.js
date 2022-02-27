"use strict"

// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

/*
Take a number (n)
- output n rows of *'s and ' 's
- center row will have n *'s and no spaces
- numbers up to center row will start with one star preceded by n / 2 .floor
  spaces
- each row counting up to the ceter row will have one less space and one more
  star (spaces always precede stars)
- each row after center will follow the reverse pattern

DATA:
input: positive integer
output: string
processing: string?

ALGO:
create variable center, set to Math.ceil(number / 2);
create variable starCounter, set to 1;
create variable spaceCounter, set to center - 1;

create for loop, let row = 1; keep while row <= input number, add 1 each time;
if row === center
console.log inputNumber * '*';
else output spaces.repeat spaceCounter + stars.repeat star counter;
if row < center spaces -= 1, stars += 2
else center spaces += 1, stars -= 2;
*/

// Examples:

function diamond(n) {
  let center = Math.ceil(n / 2);
  let starCounter = 1;
  let spaceCounter = center - 1;

  for (let row = 1; row <= n; row += 1) {
    if (row === center) {
      console.log('*'.repeat(n));
    } else {
      console.log(' '.repeat(spaceCounter) + '*'.repeat(starCounter));
    }

    if (row < center) {
      starCounter += 2;
      spaceCounter -=1;
    } else {
      starCounter -= 2;
      spaceCounter += 1;
    }
  }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *