/* Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string. */

function repeater(string) {
  let charArr = string.split('');
  let repeatingString = '';

  charArr.forEach((char) => {
    repeatingString += char;
    repeatingString += char;
  })

  return repeatingString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""