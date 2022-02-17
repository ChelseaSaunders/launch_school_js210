"use strict"

// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be upper
// or lower case. Non-alphabetic characters should still be included in the
// output string, but should not be counted when determining the appropriate
// case.

function staggeredCase(str) {
  let staggered = '';
  let nextValUpper = true;

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (char.match(/[^a-z]/gi)) {
      staggered += char;
    } else if (nextValUpper === true) {
      staggered += char.toUpperCase();
      nextValUpper = false;
    } else {
      staggered += char.toLowerCase();
      nextValUpper = true;
    }
  }

  return staggered;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"