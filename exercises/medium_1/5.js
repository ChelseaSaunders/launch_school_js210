"use strict"

// Write a function that takes a sentence string as an argument and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

/*
take input sring
identify words that mean digits
replace those words with corresponding string number
make sure that only word/letter chars are taken into account when determining
  if a word is a number word
-if a number word has puctuation attached, it must retain that punctuation
(four. 4.)
-case insensitivity -account for

do we only consider non-lettre chars if they are leading or trailing

DATA:
input is string
output is strng
- store number matches in object with strings
- use array to map over strings

ALGO:
- create constand object with string number word keys (lowercase) and string
  digits as values
- split input into array wilth " " as delimeter
- iterate through array (map over it), with "word" as parameter
    - iterate objects.keys using forEach through number word array using number

      - assign regex to new Regex(number, 'g')
      reassign word to word.replace(regex, object:nuber);

    rejoin the mapped array and return it
*/

// Example:

const numberCoversion = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
                          six: 6, seven: 7, eight: 8, nine: 9, }

function wordToDigit(string) {
  Object.keys(numberCoversion).forEach((number) => {
    let regex = new RegExp('\\b' + number + '\\b', 'gi');
    string = string.replace(regex, numberCoversion[number]);
  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Call four-five-four.')) // 'Call 4-5-4.'
console.log(wordToDigit('Call FOUR four FoUr.')) // Call 4 4 4.