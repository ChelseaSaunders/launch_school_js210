/* Create a simple tip calculator. The program should prompt for a bill amount 
  and a tip rate. The program must compute the tip, and then log both the tip \
  and the total amount of the bill to the console. You can ignore input 
  validation and assume that the user will put in numbers. */

let readlineSync = require('readline-sync');
let total = parseFloat(readlineSync.question('What is the bill? '));
let percent = parseFloat(readlineSync.question('What is the tip percentage? ')); 

let tip = (total * (percent / 100)).toFixed(2);
let billAndTip = (total + parseFloat(tip)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${billAndTip}`);