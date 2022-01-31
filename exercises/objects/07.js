// The calculateBonus function calculates the bonus for a given salary. It makes
// use of two arguments for determining the bonus: a salary amount and a boolean
// switch. If the boolean is true, the bonus should be half of the salary;
// otherwise the bonus should be 0. Fill in the blanks in the function so that
// it will work, then explain why it works.

Examples:

function calculateBonus() {
  return _________[1] ? _________[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// Notice that while no "parameters" are explicitly defined for the
// calculateBonus function, there are still "arguments" that are available
// locally within the function. This is because all functions have an arguments
// object that is available locally. The arguments object contains an entry for
// every argument passed to the function.