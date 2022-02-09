/* In the previous exercise, you reimplemented a function that converts 
  non-negative numbers to strings. In this exercise, you're going to extend that 
  function by adding the ability to represent negative numbers.

  You may not use any of the standard conversion functions available in 
  JavaScript, such as String(), Number.prototype.toString, or an expression such 
  as '' + number. You may, however, use the integerToString function from the 
  previous exercise. */
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  function integerToString(num) {
    let digits = []
  
    for (let tempNum = num; tempNum > 0;) {
      digits.push(NUMBERS[tempNum % 10]);
      tempNum = Math.floor(tempNum / 10);
    }

    return digits.reverse().join('') || '0';
  }

function signedIntegerToString(num) {
  let stringNum = integerToString(Math.abs(num)) 
  if (num < 0) {
    return '-' + stringNum;
  } else if (num > 0) {
    return '+' + stringNum;
  } else {
    return stringNum;
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"