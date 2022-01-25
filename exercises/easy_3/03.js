/* Build a program that logs when the user will retire and how many more years 
the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */

function timeLeftToRetirement() {
  let rlSync = require('readline-sync');
  let age = parseInt(rlSync.question('What is your age? '));
  let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '));
  let yearsToRetirement = retirementAge - age;
  let date = new Date();
  let currentYear = parseInt(date.getFullYear());
  let retirementYear = currentYear + yearsToRetirement;

  console.log(`It's ${currentYear}.  You will retire in ${retirementYear}.`);
  console.log(`You have only ${yearsToRetirement} years of work to go!`);
}

timeLeftToRetirement();