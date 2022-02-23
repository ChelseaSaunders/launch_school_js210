"use strict"

// A triangle is classified as follows:

//     Right: One angle is a right angle (exactly 90 degrees).
//     Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments are
// in degrees.

/*
invalid:
  sum of 3 angles === 180
  every angle > 0
obtuse one angle > 90
right angle === 90


*/
// Examples:

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3].sort((a,b) => b - a);
  if (invalid(angles)) return 'invalid';
  return triangleType(angles);
}

function invalid(arr) {
  return (arr.includes(0) || arr.reduce((sum, num) => sum + num) !== 180);
}

function triangleType(arr) {
  if (arr[0] > 90) return 'obtuse';
  if (arr[0] === 90) return 'right';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"