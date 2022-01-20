/* Write a function that takes a string argument and returns a new string that 
  contains the value of the original string with all consecutive duplicate 
  characters collapsed into a single character. */

function crunch(string) {
  let crunchedString = ''
  for (let index = 0; index < string.length; index += 1) {
    let previousLetter = crunchedString[crunchedString.length - 1];
    let currentLetter = string[index];
    
    if (currentLetter != previousLetter) crunchedString += currentLetter;
  }
  return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""