/* Write a function that logs the integers from 1 to 100 (inclusive) that are 
  multiples of either 3 or 5. If the number is divisible by both 3 and 5, append 
  an "!" to the number. 

PROBLEM
Log all integers from 1 to 100 that are divisible by either 3 or 5

EXPLICIT RULES
- include 1 and 100 (though neither are divisible by 3 or 5 so won't show up in 
  the log)
- if a number is divisible by both three and 5 append an "!"

IMPLICIT RULES
- don't show duplicate numbers twice
- don't rely on type conversion for the ! appending
- no arg's

EXAMPLES
multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// … remainder of output omitted for brevity


DATA

ALGORITHM
- create funtction multiplesOfThreeAndFive that takes no arguments
- create for loop that starts with index of 1, executes until index is greater
  than 100, and incriments by 1
  - in for loop add conditional
      - if index is divisible by 3 and divisible by 5 
          log to console number converted to string, append exclaimation point
      - else if index is divisible by 3 or divisible by 5 log i to console 
      - else continue
*/

function multiplesOfThreeAndFive() {
  for (let i = 1; i <= 100; i += 1) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(String(i) + '!');
    } else if ((i % 3 === 0) || (i % 5 === 0)) { 
      console.log(i);
    } else continue;
  }
}

multiplesOfThreeAndFive();