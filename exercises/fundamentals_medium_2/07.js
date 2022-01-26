/* Read through the code below and determine what will be logged. You may refer 
  to the ASCII Table to look up character code values. */

function one() {
  function log(result) {
    console.log(result); // undefined
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

/* Solution

Welcome
to
the
Matrix!

Discussion

The trick to solving this problem is to follow the sequence of function calls. 
The call to the one function may look confusing, but it is actually just two 
successive function calls (because the one function returns the anotherOne 
function). Notice that when the anotherOne function is returned, it still has 
access to the log function that is declared in its enclosing scope (closure) 
inside the one function.

This code has a total of eight function calls:

1: one();
2: anotherAnotherOne();                         // Welcome
3: anotherOne(116, 111);
4: log(result);                                 // to
5: anotherOne(116, 104, 101);
6: log(result);                                 // the
7: anotherOne(77, 97, 116, 114, 105, 120, 33);
8: log(result);                                 // Matrix!