/* Write a function that takes a sorted array of integers as an argument, and 
  returns an array that includes all the missing integers (in order) between the 
  first and last elements of the argument. */


function missing(sortedArr) {
  let missingArr = [];
  let startNum = sortedArr[0];
  let finalNum = sortedArr[sortedArr.length - 1];

  for (let currentNum = startNum; currentNum < finalNum; currentNum += 1) {
    if (!sortedArr.includes(currentNum)) {
      missingArr.push(currentNum);
    }
  }

  return missingArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []