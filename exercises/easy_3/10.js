/* Modify the wordSizes function from the previous exercise to exclude 
  non-letters when determining word size. For instance, the word size of "it's" 
  is 3, not 4. 
  Words consist of any sequence of non-space characters. */

function cleanString(string) {
  return string.replace(/[^A-Za-z]/g, '');
}

function wordSizes(string) {
  let wordSizesObj = {};
  let wordArr = string.split(' ');

  for (let index = 0; index < wordArr.length; index += 1) {
    let word = cleanString(wordArr[index]);
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


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));           