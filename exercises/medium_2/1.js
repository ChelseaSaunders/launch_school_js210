"use strict"

// Write a function that takes a string and returns an object containing the
// following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

/*
Problem
take a string
- count how many chars are uppercase letters
- count how many chars are lowercase letters
- count how many chars are not letters
- count how many chars are in the string

for each of those counts divide by the total char count to get percentage
return should be object with the following keys:
- lowercase, uppercase, and neither
- values assigned to those keys should be string numbers that round to two
  decimal places
- white space is counted as "neither"
- charachters might not be in order of type
- if not chars of a certain tpe, assign "0.00" to those types

DATA:
input: string
output: object (see above)
- numbers to calculate totals and percentages, and appropriate decimal places

ALGO:
- create object { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }
- calculate length of string and store a stringLength
if strLength === 0 return object
regex match for lowecase letters and call length if length is greater than 0; if
match returns null, assign to 0,
  divide by the tringlength and rund apppropriately and store in object
  lowercase
same step for uppercase and neither
return object

*/

function letterPercentages(string) {
  let totals = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };
  let stringLength = string.length;
  if (stringLength === 0) return totals;
  let lowercase = string.match(/[a-z]/g) || 0;
  let uppercase = string.match(/[A-Z]/g) || 0;
  let neither = string.match(/[^a-z]/gi) || 0;

  if (lowercase !== 0) {
    totals.lowercase = calculatePercentageString(lowercase, stringLength);
  }


  if (uppercase !== 0) {
    totals.uppercase = calculatePercentageString(uppercase, stringLength);
  }


  if (neither !== 0) {
    totals.neither = calculatePercentageString(neither, stringLength);
  }

  return totals;
}

function calculatePercentageString(total, length) {
  return String(((total.length / length) * 100).toFixed(2));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages(''));
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }