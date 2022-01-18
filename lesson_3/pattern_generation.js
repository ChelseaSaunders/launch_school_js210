/* Write a function that takes a number of rows as the argument nStars and logs 
  a square of numbers and asterisks. For example, if nStars is 7, log the 
  following pattern:



PROBLEM

EXPLICIT RULES
input will be int greater than 1, less than 10

IMPLICIT RULES
must execute same number of times as input number


EXAMPLES
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

DATA
input integer
output string (logged to console)

ALGORITHM 
- create function generatePattern that takes one integer as arg, nStars
- create array outputValues that is as long as nstars; populate each element with a star
- create for loop; assign index to 0, as long as index is less 
  than nStars; increment index by 1
  set index of outputValues to index + 1;
  log joined putputValues

*/

function generatePattern(nStars) {
  let outputValues = []
  let counter = 1
  while (counter <= nStars) {
    outputValues.push('*');
    counter += 1;
  }

  for (index = 0; index < nStars; index += 1) {
    outputValues[index] = (index + 1);
    console.log(outputValues.join(''));
  }
}

generatePattern(7);
generatePattern(9);
generatePattern(2);