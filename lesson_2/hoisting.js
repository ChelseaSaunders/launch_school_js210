/* Please predict the output of the following programs, and explain why they 
output what they do. */

// 1.
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
/* Line 13 will output 'inner' because the `a` on line 8 shadows the `a` from 
line 5, which would otherwise be accessible in the block. Lines 12 and 14 will 
output 'outer' because line 8 is a new local variable, not a reassignment of 
the global variable `a` from line 5.

LS ANSWER:
Line 8 is the first invocation of console.log; here, a is the global variable a 
from line 1. Line 9 calls the testScope function; in the function, a is a local 
variable on line 4, so line 5 logs inner. After testScope returns, the a on line 
10 is the global variable on line 1 again; therefore, it logs outer.*/

// 2.
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/* Lines 34 and 36 will both output "inner" because of the variable 
reassignment that occurs on line 30. Prior to the method called on line 35
a has its original value of "outer" so line 34 will output that */\

// 3
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

/* LS answer:
epmty, play station, computer
The first log operation occurs on line 8; here, basket still has its original 
value, empty. The function call on line 19 changes basket to tv, and the call on 
line 20 changes it to computer. The function call on line 21 does not alter the 
value of the basket global, but defines and sets a local variable with the same 
name. It then logs play station. Upon returning from shop3, the local variable 
goes away, so line 23 logs the value of the global basket: computer. */

// 4 
function hello() {
  a = 'hi';
}

hello();
console.log(a);

/* hi

Here, we call the hello function, so we assign a value of hi to the variable. 
The variable is a global variable since we don't declare it with let, const, 
var, or function. Thus, line 6 logs hi.

Note that this is nearly identical to what happens when we explicitly declare a 
at the global level:

let a;

function hello() {
  a = 'hi';
}

hello();
console.log(a);

However, there is a subtle difference: without an explicit declaration, a 
becomes a property of the global object. We discuss objects in more detail later 
and why this extremely subtle distinction matters. For now, though, you just 
need to know that a is available everywhere in the program. */

// 5

function hello() {
  let a = 'hello';
}

hello();
console.log(a);

/* No variable; since the variable declaration was inside the function, it is
not available outside of the function

LS ANSWER:
Since we don't define a global variable a, line 6 does not find any variables 
named a; thus, it raises a ReferenceError. */

// 6

console.log(a);

var a = 1;

/* LS ANSWER:
ndefined

After hoisting, this program is equivalent to:

var a;
console.log(a);
a = 1;

Line 1 in the original code logs undefined since a is not assigned a value until 
line 3. */

// 7

console.log(a);

let a = 1;

/* 1
ReferenceError: Cannot access 'a' before initialization

After hoisting, JavaScript can tell that there is an a variable, but that 
variable lives in the Temporal Dead Zone; it is unset and cannot be accessed.*/

// 8

console.log(a);

function hello() {
  a = 1;
}

/* Uncaught ReferenceError: a is not defined

After hoisting, this program is equivalent to:

function hello() {
  a = 1;
}

console.log(a);

We define hello, but never call it, so we never assign a value to a. Since we also don't declare a anywhere, line 5 produces a ReferenceError. */
