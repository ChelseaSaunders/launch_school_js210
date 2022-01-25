/* Write a function that takes a string consisting of one or more space 
  separated words and returns an object that shows the number of words of 
  different sizes.

  Words consist of any sequence of non-space characters. */

function wordSizes(string) {
  let wordSizesObj = {};
  let wordArr = string.split(' ');

  for (let index = 0; index < wordArr.length; index += 1) {
    let word = wordArr[index]
    let length = word.length;

    if (length === 0) {
      continue;
    } else if (Object.keys(wordSizesObj).includes(String(length))) {
      wordSizesObj[length] += 1;
    } else {
      wordSizesObj[length] = 1;
    }
  }
  
  return wordSizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {} */