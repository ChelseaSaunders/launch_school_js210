"use strict"

// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.
/*
PROBLEM
rules for valid:
- sum of lengths of two shortest sides is > length of longest side
- All side lengths are > 0

Take three numbers (lengths of sides)
- Make sure all sides are > 0
- find longest side and make sure it is less than the sum of the other two sides
If either of these conditions is not met, return 'invalid'

determine what type of triangle it is:
- if all sides are equal return 'equilateral'
- of two sides are equal return 'isosceles'
- otherwise return scalene

DATA:
Input: number
Output: string
Manipulation: array

ALGO:
create array with all three values
  - sort array by length (b - a )
create helper function invalid
  - if any in array are 0, reurn true

  if array 0  <= array 1 + array 2 return true

  return false
if invalid(array of triangles) return 'invalid'

create helper function triangle type
  - if array 0 === array 2 return equalitaral
  - else if array[0] === array 1 array 1 === array 2 return isoscleles
  -else reurn scalne

return triangle type triangleaRray
*/
// Examples:

function triangle(side1, side2, side3) {
let triangleSides = [side1, side2, side3].sort((a, b) => b - a);
if (invalid(triangleSides)) return 'invalid';
return triangleType(triangleSides);
}

function invalid(sides) {
  if (sides.includes(0)) return true;
  if (sides[0] >= sides[1] + sides[2]) return true;
  return false;
}

function triangleType(sides) {
  if (sides[0] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] == sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"