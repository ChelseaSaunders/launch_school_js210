/* Write a password guessing program that tracks how many times the user enters 
  the wrong password. If the user enters the password wrong three times, log 
  'You have been denied access.' and terminate the program. If the password is 
  correct, log 'You have successfully logged in.' and end the program. 
  
  // password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.

PROBLEM
- take input from user; determine if it matches provided password
- If it matches, log "you have successfully logged in to the console".
- If it does not ask again. after 3 failed attempts, do not ask again; log "you
  have been denied access" to the console

EXPLICIT RULES

IMPLICIT RULES
- Case sensitive
- Is 'password' always the password or should new password be passed as arg (can
  write either way)
- count whitespaces + other non-alpha characters 

EXAMPLES
- see above

DATA 
- input from user will be string, existing password will be string, items to 
  log to console are strings
- outcome of strict equality comparison (determines what to log) will be strings
- counter of some sort for attempts will be 0

ALGO 
- create function passwordLoginAttempts that does not take args (unless each new
  password is an arg; can easily write that way)
- create constant password, set to 'password'
- create local variable success, assign to string "you have successfully logged 
  in to the console".
- create local variable failure, assigned to string "You have been denied 
  access."
- create for loop, with attempts set to 1, break condition attempts greater than
  3, incriment by one each time
- in loop prompt "Please enter the password"
- set variable passwordAttempt to the user input
- create if condition, if passwordAttemt is strict equal to password
  - log to console success
  - return
- outside of loop, log to console failure
- return
  */

function passwordLoginAttempts() {
  const PASSWORD = 'password';
  let success = 'You have successfully logged in.';
  let failure = 'You have been denied.';

  for (let attempts = 1; attempts <= 3; attempts += 1) {
    let rlSync = require('readline-sync');
    let userPasswordAttempt = rlSync.question("Please enter the password: \n");
    if (userPasswordAttempt === PASSWORD) {
      console.log(success);
      return;
    }
  }

  console.log(failure);
  return;
}

passwordLoginAttempts();