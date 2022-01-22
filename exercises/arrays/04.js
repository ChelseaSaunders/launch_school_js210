/* The concat function from the previous exercise could only concatenate a 
  maximum of two arrays. For this exercise, you are going to extend that 
  functionality. Refactor the concat function to allow for the concatenation of 
  two or more arrays or values.

  HINT:
  You can use the rest parameter syntax to represent an indefinite number of 
  arguments as an array. */

function concat(...args) {
  let concatArray = []

  args.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((el) => { concatArray.push(el); })
    } else {
      concatArray.push(element);
    }
  })

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]