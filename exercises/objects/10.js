"use strict"

// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// The two functions below do the reverse of the previous exercise. They take a
// 24-hour time argument and return the number of minutes before or after
// midnight, respectively. Both functions should return a value between 0 and
// 1439 (inclusive). Refactor the functions using the Date object.

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(time) {
  let midnight = new Date('1/1/2000 00:00').getTime() / MILLISECONDS_PER_MINUTE;
  let input = new Date(`1/1/2000 ${time}`).getTime() / MILLISECONDS_PER_MINUTE;

  return input - midnight;
}

function beforeMidnight(time) {
  let timeAfterMidnight = afterMidnight(time);
  return timeAfterMidnight === 0 ? 0 : MINUTES_PER_DAY - timeAfterMidnight;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686