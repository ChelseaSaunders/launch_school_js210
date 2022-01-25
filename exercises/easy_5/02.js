/* Write a function that takes a string, doubles every consonant character in 
  the string, and returns the result as a new string. The function should not 
  double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace. */

function doubleConsonants(string) {
  let charArr = string.split('');
  let repeatString = '';

  charArr.forEach((char) => {
    repeatString += char;
    if (char.match(/[A-Za-z]/g) && char.match(/[^aeiouAEIOU]/g)) {
      repeatString += char;
    }
  })

  return repeatString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // "