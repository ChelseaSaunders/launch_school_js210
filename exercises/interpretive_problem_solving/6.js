"use strict"

// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Problem: take an odd integer, n, and output stars and spaces according to the
following pattern
n rows:
 - center row n stars only
 -all other rows are 3 starts mixed with spaces
    - pattern: 2 rows that surround center row have 3 stars in the middle and
      are preceded by n - 3 / 2 spaces
      - rows going up and down, subtract one leading space, add 1 in-between
        space between each star (repeat substracting and adding for every row

Edge cases: ? validate input

DATA:
Input: odd integer greater that or equal to 7
Output: pattern (see examples); string
Manipulaion: numbers, string

ALGO:
intitialize center to Math.ceiling(num / 2);
iniaizie leadingSpaceCount to 0
initiialize middleSpaceCout to (num - 3) / 2
creat for loop: set row to 1, while row is less than or equal to num, add 1
if row === centter, log '*'.repeat(num)
else if row < center, log ' '.repeat(leadingspaces), *,
  ' '.repate(middleSpaceCount), *, ' '.repate(middleSpaceCount,
      reassign leading space ocount to + 1
      reassign center count to - 1
else if row > center, log ' '.repeat(leadingspaces), *,
  ' '.repate(middleSpaceCount), *, ' '.repate(middleSpaceCount,
      reassign leading space ocount to - 1
      reassign center count to + 1 */

function star(num) {
  let center = Math.ceil(num / 2);
  let leadingSpaceCount = 0;
  let middleSpaceCount = (num - 3) / 2;

  for (let row = 1; row <= num; row += 1) {
    if (row === center) {
      console.log('*'.repeat(num));
    } else if (row < center ) {
      console.log(generateRowOutput(leadingSpaceCount, middleSpaceCount));
      leadingSpaceCount += 1;
      middleSpaceCount -= 1;
    } else {
      leadingSpaceCount -= 1;
      middleSpaceCount += 1;
      console.log(generateRowOutput(leadingSpaceCount, middleSpaceCount));
    }
  }
}

function generateRowOutput(leadingCount, middleCount) {
  let leading = ' '.repeat(leadingCount);
  let middle = ' '.repeat(middleCount);
  return leading + '*' + middle + '*' + middle + '*';
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *