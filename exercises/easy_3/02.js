/* Write a program that solicits six numbers from the user and logs a message 
  that describes whether the sixth number appears among the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23]. */

function isExistingNumber() {
  let rlSync = require('readline-sync');
  let existingNumbers = [];

  existingNumbers.push(rlSync.question(`Enter the 1st number: `));
  existingNumbers.push(rlSync.question(`Enter the 2nd number: `));
  existingNumbers.push(rlSync.question(`Enter the 3rd number: `));
  existingNumbers.push(rlSync.question(`Enter the 4th number: `));
  existingNumbers.push(rlSync.question(`Enter the 5th number: `));
  let last = rlSync.question(`Enter the last number: `);

  if (existingNumbers.includes(last)) {
    console.log(`The number ${last} appears in [${existingNumbers}].`);
  } else {
    console.log(`The number ${last} does not appear in [${existingNumbers}].`);
  }
  return;
}

isExistingNumber();