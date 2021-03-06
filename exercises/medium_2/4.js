"use strict"

// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

/*
create array thirteenths []
create for loop (0; < 12; o += 1)
  thirteenth.push(year, i, 13)

thirteenths.filter(get day === 5).length
*/
// Examples:

function fridayThe13ths(year) {
  let thirteenths = []
  for (let month = 1; month <= 12; month += 1) {
    thirteenths.push(new Date(`${year}, ${month}, 13`));
  }
  return thirteenths.filter((date) => date.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2