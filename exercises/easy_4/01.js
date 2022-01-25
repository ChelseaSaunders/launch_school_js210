/* Write a function that takes a floating point number representing an angle 
  between 0 and 360 degrees and returns a string representing that angle in 
  degrees, minutes, and seconds. You should use a degree symbol (˚) to represent 
  degrees, a single quote (') to represent minutes, and a double quote (") to 
  represent seconds. There are 60 minutes in a degree, and 60 seconds in a 
  minute.

  Note: your results may differ slightly depending on how you round values, but 
  should generally be within a second or two of the results shown. */

function dms(angle) {
  let remainder = angle % 1;
  let degrees = angle - remainder;
  let minutes = addLeadingZero(Math.round(remainder * 60));
  remainder = parseFloat(minutes) % 1;
  let seconds = addLeadingZero(Math.round(remainder * 60));

  return `${degrees}°${minutes}'${seconds}"`;
}

function addLeadingZero(num) {
  return num < 10 ? '0' + String(num) : String(num);
}

// console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/* LS SOLUTION:
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
} 
*/