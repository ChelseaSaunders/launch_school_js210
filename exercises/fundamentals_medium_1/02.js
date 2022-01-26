/* The following program is expected to log each number between 0 and 9 \
  (inclusive) that is a multiple of 3. Read through the code shown below. Will 
  it produce the expected result? Why or why not? */

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/* This code results in an infinite loop because the variable i is never 
  incremented. The conditional expression (i % 3 === 0) always evaluates as 
  true, so the else clause containing the incrementer expression is never 
  executed. */