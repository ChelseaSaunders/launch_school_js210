/* Create a variable named today with the current date and time as its value. */

let today = new Date();

/* Log a string, "Today's day is 5", that tells the current day of the week as a 
  number between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to 
  obtain the number of the day of week. */

console.log(`Today is day ${today.getDay()}.`);

/* The getDay method, like many of the get methods on the date object, returns a 
  zero-based index of the current day of week instead of the day name. This 
  enables support for multiple locales and formats. Modify the output message of 
  the previous problem to show the 3-letter day name abbreviation. You may use 
  the following array: */

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let weekday = daysOfWeek[today.getDay()];
console.log(`Today is ${weekday}.`);

/* Let's add the calendar date (the day of month) to our log message: "Today's 
  date is Mon, the 6th". Use the getDate method to obtain the current day of 
  month. Don't worry about using different suffixes for numbers that end with 1, 
  2, or 3 just yet; we'll deal with that in the next problem. */

let numberDay = today.getDate();
console.log(`Today is ${weekday} the ${numberDay}.`);

/* Ideally, the suffix on the day number needs to adjust to the proper suffix 
  for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that 
  takes the day of month as a numeric value and returns the formatted day of 
  month and suffix. Make sure you use the correct suffixes. */

function dateSuffix(numDate) {
  let suffix;
  if (numDate % 10 === 1 && numDate !== 11) {
    suffix = 'st';
  } else if (numDate % 10 === 2 && numDate !== 12) {
    suffix = 'nd';
  } else if (numDate % 10 === 3 && numDate !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th'
  }

  return `${numDate}${suffix}`;
}

let numberDayWithSuffix = dateSuffix(numberDay);
console.log(`Today is ${weekday} the ${numberDayWithSuffix}.`);

/* Change your output to include the value from the getMonth method. Thus, the 
  logged string will read "Today's date is Mon, 11 6th", where 11 is the month 
  number returned by getMonth. */

let monthNum = today.getMonth();
console.log(`Today is ${weekday}, ${monthNum} ${numberDayWithSuffix}.`);

/* Let's make the month readable. Using the same technique we used in problem 3, 
  convert the month number in the output string to a 3-letter month name 
  abbreviation. You may use the following array: */

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthStr = months[monthNum];
console.log(`Today is ${weekday}, ${monthStr} ${numberDayWithSuffix}.`);

/* Our call to console.log is getting cluttered. Let's clean things up a bit and 
  refactor the code into a few formatting functions that we can call from 
  anywhere in our code. Create formattedMonth and formattedDay functions to 
  format the month and day, then write a formattedDate function that pulls 
  everything together and logs the fully formatted date. */

function formattedMonth(date) {
  let monthStrArr =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthNum = (date.getMonth());
  return monthStrArr[monthNum];
}

function formattedDay(date) {
  let dateNum = date.getDate();
  return dateSuffix(dateNum);
}

function formattedDate(date) {
  return `${formattedMonth(date)} ${formattedDay(date)}`;
}

console.log(`Today is ${formattedDate(today)}.`);

/* Log the values returned from the getFullYear and getYear methods. Note how 
  these values differ. Note especially that getYear is deprecated: you should 
  avoid using deprecated methods as they may one day disappear. */

console.log(today.getFullYear());
console.log(today.getYear());

/* Use the getTime method and log the current date and time in total 
  milliseconds since Jan. 1st 1970. */

console.log(today.getTime());

/* Create a new date object variable named tomorrow that contains a Date object. 
  Initialize the variable by setting it to the value of today. You can get the 
  value of today using the getTime method. Next, change the date on the tomorrow 
  object to the day after today: you should use setDate to change the date. 
  Finally, log the tomorrow object with your formattedDate function. */

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(formattedDate(tomorrow));

/* Create a new variable named nextWeek that is a new Date copied from the today 
  object. Compare nextWeek and today, and log the results. Are they equal? Why 
  or why not? */

let nextWeek = new Date(today.getTime());
console.log(nextWeek === today); // false, they are different objects

/* The === operator only returns true with Date objects if the objects are the 
  same object. Since we have two different objects (with the same values), we 
  must instead compare the values represented by those objects. Compare the 
  values returned by toDateString to determine whether the two objects are 
  equal. Finally, add 7 days to the nextWeek date and compare the two objects 
  again. */
console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

/* Finally, write a function named formatTime that takes a date object as an 
  argument and returns a string formatted with the hours and minutes as "15:30". 
  Make sure you handle the case where the hours or minutes has only one digit: 
  you need to pad the value with a leading zero in such cases, e.g., "03:04". 
  You can use the getHours and getMinutes methods to obtain the hours and 
  minutes. */

function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  if (hours.length === 1) hours = '0' + hours;
  if (minutes.length === 1) minutes = '0' + minutes;

  return `${hours}:${minutes}`;
}

console.log(formatTime(today));