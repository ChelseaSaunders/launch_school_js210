/* Implement a function that takes a String as an argument and returns an object 
  that contains a count of the repeated characters.

  Note that repeatedCharacters does a bit more than simply count the frequency 
  of each character: it determines the counts, but only returns counts for 
  characters that have a count of 2 or more. It also ignores the case.
  
  DATA: input strinng; output obj

  ALGO
  convert string into lowercase letters
  create emoty array, each letter
  use for to iterdate thruogh string, and add letter to arr if it does not 
  already have that letter
  create new empty object letter count
  iterate through array, word.match each letter; if answer.length >2 add letter 
    as key and answer.length as valye to object
  */

function repeatedCharacters(string){
  let lowercaseString = string.toLowerCase();
  let uniqueLettersArr = [];
  for (let i = 0; i <= string.length; i += 1) {
    if (!uniqueLettersArr.includes(lowercaseString[i])) {
      uniqueLettersArr.push(lowercaseString[i]);
    }
  }
  
  let charCount = {}
  uniqueLettersArr.forEach((letter) => {
    let regEx = new RegExp(letter, 'g');
    let count = lowercaseString.match(regEx).length
    if (count >= 2 && letter != undefined) {
      charCount[letter] = count;
    }
  })

  return charCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

