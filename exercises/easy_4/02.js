/* Write a function that takes two arrays as arguments and returns an array 
  containing the union of the values from the two. There should be no 
  duplication of values in the returned array, even if there are duplicates in 
  the original arrays. You may assume that both arguments will always be arrays.
*/

function union(...arrays) {
  let combinedArr = [];
  arrays.forEach((array) => addElements(array, combinedArr));

  return combinedArr;
}

function addElements(originalArr, combinedArr) {
  for (let i = 0; i < originalArr.length; i += 1) {
    if (!combinedArr.includes(originalArr[i])) combinedArr.push(originalArr[i]);
  }
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]