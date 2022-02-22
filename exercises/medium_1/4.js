"use strict"

// A stack is a list of values that grows and shrinks dynamically. A stack may
// be implemented as an Array that uses two Array methods: Array.prototype.push
// and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of
// values. Each operation in the language operates on a register, which can be
// thought of as the current value. The register is not part of the stack.
// An operation that requires two values pops the topmost item from the stack
// (i.e., the operation removes the most recently pushed value from the stack),
// operates on the popped value and the register value, and stores the result
// back in the register.


// Consider a MULT operation in a stack-and-register language. It removes the
// value from the stack, multiplies the removed stack value with the register
// value, then stores the result back in the register. For example, if we start
// with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a
// register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is
//   removed), and the result of the multiplication, 28, is left in the
//   register. If we do another MULT at this point, the stack is mutated to [3],
//   and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based
// programming language that has the following commands (also called operations
//   or tokens):

//     n : Place a value, n, in the register. Do not modify the stack.
//     PUSH : Push the register value onto the stack. Leave the value in the
//           register.
//     ADD : Pop a value from the stack and add it to the register value,
//           storing the result in the register.
//     SUB : Pop a value from the stack and subtract it from the register value,
//           storing the result in the register.
//     MULT : Pop a value from the stack and multiply it by the register value,
//           storing the result in the register.
//     DIV : Pop a value from the stack and divide the register value by the
//           popped stack value, storing the integer result back in the register.
//     REMAINDER : Pop a value from the stack and divide the register value by
//                 the popped stack value, storing the integer remainder of the
//                 division back in the register.
//     POP : Remove the topmost item from the stack and place it in the register.
//     PRINT : Print the register value.

// All operations are integer operations (which is only important with DIV and
// REMAINDER).

// Programs will be supplied to your language function via a string argument.
// Your function may assume that all arguments are valid programs — i.e., they
// will not do anything like trying to pop a non-existent value from the stack,
// and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.
/*
PROBLEM
- stack: a  array list of values that utilizes push and pop
- register is a single value (current value)--not part of stack
- if two values are needed: pop last value from stack, perform the opertaion on
  the popped value and register, and store that value in the register
  ** last value means largest index value
  - after this action, register is reassigned, stack no longer inclues last
    value
Actions we need:
- num - ad to regester
- push (add value as last element in register)
- pop (remove last value from stack and reassign to register)
- add (remove last value from stack and reassign register to that value)
- sub (remove last value from stack and reassign register to current register
    - stack value)
- mult (remove last value from stack and reassign register to current register
    * stack value)
- div (remove last value from stack and reassign register to current register
    / stack value)
- remainder (remove last value from stack and reassign register to current
    register % stack value)
- print (output registr value **NO MUTATION OR REASSIGNMENT)

Rules:
- all values must be integers
- commands are passed as string argument
  must be in corect order: meaning if an operation requires a new value, that
    value must follow the command
- commands and values are all separated by "spaces"
- convert the string numbers to integers before adding to register or stack
- if stack is empty, output 0 (print function)

questions:
- need to validate input, specifically that all added values are intgers
  (starting as string)
- need to validate for order of string (eg. if a value is needed after an
    operation, do we assume one is provided?  if not, what do we do in the
    program)
- do we need to worry about case for input

DATA:
input is string
- array to manipulate data string
- array of numbers
output are numbers

ALGO:
split input string using " " as delimeter
map over array values (and reassign to mapped arr)
  - if String(parseInt(value)) === value => parseInt(value, 10)
  - if not value.toUpperCase
initialize stack to empty array
initialize register to 0

use forEach to iterate through instructions array
if value is number
  push to stack

switch value
- push
  stack.push(register)
- pop
  register = stack.pop
- add
  register += stack.pop
- sub
  register -= stack.pop
- mult
  register *= stack.pop
- div
 -- will need math.floor, reassign register to register/stack.pop floored
- remainder
 -- will need math.floor, reassign register to register%stack.pop floored
- print
  console log register
*/

function minilang(instructions) {
  instructions = generateCleanInstructionArr(instructions);
  let stack = [];
  let register = 0;
  instructions.forEach((value) => {
    if (typeof value === 'number') register = value;

    switch(value) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  });
}

function generateCleanInstructionArr(string) {
  return string.split(' ')
               .map((value) => { if (String(parseInt(value, 10)) === value) {
                                  return parseInt(value, 10);
                                } else {
                                  return value.toUpperCase();
                                }
                              });
}

// Examples:

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)