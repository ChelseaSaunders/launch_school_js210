/* Please predict the output of the following programs, and explain why they 
output what they do. */

// 1.

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/* undefined

The scope of variables declared with var is function-level, not block-level. 
Therefore, after hoisting, this code becomes:

function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

say();

Since we declare but never assign a, line 7 logs undefined. */

// 2.
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/* no such variable
LS ANSWER:
ReferenceError: a is not defined

The scope of variables declared with let is block-level, not function-level. 
Therefore, the variable a is only available inside the if clause on line 3. */

// 3.
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

 /* hello, not defined
LS ANSWER:
hello
Uncaught ReferenceError: a is not defined

After hoisting:

function hello() {
  var a;
  a = 'hello';

  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);

a's scope is the body of hello. Since there is no global variable named a, line 
13 raises an error. */

// 4.
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

/* LS ANSWER:
hello, hello
Inside the if statement, a's scope is the confined to line 6. Since a on line 2 
is not declared, it is treated as a global variable. Thus, both lines 3 and 11 
output hello. */

// 5.
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
/* 4
JavaScript hoists the variable declaration on line 112 to the top of the global 
scope. Since a global variable named a exists, the hoist has no direct effect on 
operation. Inside the loop, a gets assigned five times; at the end of the loop, 
it has a value of 4. Thus, line 7 logs 4. */

// 6.
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

/* hello
let has block scope os the let in the for statement is a new block variable, 
shadowing the a from line 123, thus the outer scope variable a on line 123 does 
not change.
LS ANSWER:
In this code, we have two different a variables: one in the outer scope, and one 
in the inner scope. The declaration on line 4 creates and initializes the 
inner-scoped variable. On line 7, we output the value of the a variable declared 
on line 1. That variable still has the value 'hello', so line 7 outputs hello. 
*/

// 7.
let a = 1;

function foo() {
  a = 2;   // reassigns a from 143 to 2 when foo is called
  let bar = function() {
    a = 3;  // reassigns a from 143 to 3 when bar is called
    return 4;
  };

  return bar(); // returns 4
}

console.log(foo()); // 4
console.log(a); // 3 since foo was called above

// 8.
var a = 'global';

function checkScope() {
  var a = 'local';  // shadows above variable fron 159
  const nested = function() {
    var a = 'nested'; // shadows avove variable from 162
    let superNested = () => {
      a = 'superNested'; //shadows above variable from 164
      return a;  // supernested
    };

    return superNested(); // 'superNested'
  };

  return nested(); // 'superNested'
}

console.log(checkScope()); // 'superNested/
console.log(a); // 'global'

// 9.
let a = 'outer';
let b = 'outer';

console.log(a); // outer
console.log(b); // outer
setScope(a); // 
console.log(a); // outer: Function arguments become local variables in the 
                // function, so assigning to an argument has no effect on the original argument.
console.log(b); // inner

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// 10.
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10);
console.log(total); // 60
console.log(increment); // 15

// 11.
let a = 'outer';

console.log(a); // outer
setScope();
console.log(a); // error

var setScope = function () {
  a = 'inner';
};

outer
Uncaught TypeError: setScope is not a function(…)

With hoisting, the above code is equivalent to:

var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};

/* 
outer
Uncaught TypeError: setScope is not a function(…)

With hoisting, the above code is equivalent to:
var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};

Line 6 tries to call setScope as a function. However, setScope is just a 
declared global variable whose value is undefined. Note that unlike function 
declarations, with function expressions using var, the name of the function is 
hoisted, but not the function body. */
