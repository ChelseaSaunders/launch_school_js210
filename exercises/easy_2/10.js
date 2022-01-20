/* Write a function that takes a year as input and returns the century. The 
  return value should be a string that begins with the century number, and ends 
  with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

  New centuries begin in years that end with 01. So, the years 1901 - 2000 
  comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Rules:
if ends in 00 first part is correct
if not 00, first part + 1
if less than 100 1st

create helper function determineCentury, takes year as arg
- if year < 100, return 1 
if year % 100 === 0
    retyrn year / 100
 else return year / 100 + 1

determiineSuffix(year)
last year = year[year.length - 1]

*/

function determineCenturNum(year) {
  if (year <= 100) {
    return '1';
  } else if (year % 100 === 0) {
    return String(year / 100);
  } else {
    return String(parseInt(year / 100) + 1);
  }
}

function determineSuffix(stringYear) {
  let lastNum = stringYear[stringYear.length - 1];
  let secondToLastNum = stringYear[stringYear.length - 2];
  if (lastNum === '1' && secondToLastNum != '1') {
    return 'st';
  } else if (lastNum === '2' && secondToLastNum != '1') {
    return 'nd';
  } else if (lastNum === '3' && secondToLastNum != '1') {
    return 'rd';
  } else {
    return 'th';
  }
}

function century(year) {
  let centuryNum = determineCenturNum(year);
  let suffix = determineSuffix(centuryNum);
  
  return centuryNum + suffix;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));