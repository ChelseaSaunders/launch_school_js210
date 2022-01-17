/* Write a program to determine a student’s grade based on the average of three 
  scores you get from the user. Use these rules to compute the grade:

    If the average score is greater than or equal to 90 then the grade is 'A'
    If the average score is greater than or equal to 70 and less than 90 then 
      the grade is 'B'
    If the average score is greater than or equal to 50 and less than 70 then 
      the grade is 'C'
    If the average score is less than 50 then the grade is 'F'

You may assume that all input values are valid positive integers.

PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES
// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".

DATA

ALGORITHM 

*/

function calculateLetterGrade() {
  let rlSync = require('readline-sync');
  let firstScore = parseInt(rlSync.question('Enter score 1: '));
  let secondScore = parseInt(rlSync.question('Enter score 2: '));
  let thirdScore = parseInt(rlSync.question('Enter score 3: '));

  let average = (firstScore + secondScore + thirdScore) / 3;

  if (average >= 90) {
    console.log(`Based on the average of your 3 scores your letter grade is "A".`)
  } else if (average >= 70) {
    console.log(`Based on the average of your 3 scores your letter grade is "B".`)
  } else if (average >= 50) {
    console.log(`Based on the average of your 3 scores your letter grade is "C".`)
  } else {
    console.log(`Based on the average of your 3 scores your letter grade is "F".`)
  }
}

calculateLetterGrade();