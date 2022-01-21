/* Write a function named push that accepts two arguments: an Array and any 
  other value. The function should append the second argument to the end of the 
  Array, and return the new length of the Array.*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ] */

/* Write a function named pop that accepts one argument: an Array. The function 
  should remove the last element from the array and return it. */

function pop(array) {
  if (array.length === 0) return undefined;

  let lastElement = array[array.length -1];
  array.length = array.length - 1;
  return lastElement;
}

let count2 = [1, 2, 3];
console.log(pop(count2));             // 3
console.log(count2);                  // [ 1, 2 ]

/* Write a function named unshift that accepts two arguments: an Array and a 
  value. The function should insert the value at the beginning of the Array, and 
  return the new length of the array. You will need a for loop for this problem. 
*/

function unshift(array, value) {
  let tempArray = [value];
  for (let index = 1; index <= array.length; index += 1) {
    tempArray[index] = array[index - 1];
}
  for (let index = 0; index < tempArray.length; index += 1) {
    array[index] = tempArray[index];
  }
  return array.length;
}

/* Better LS solution:
let unshift = function(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
};
*/

let count3 = [1, 2, 3];
console.log(unshift(count3, 0));      // 4
console.log(count3);                  // [ 0, 1, 2, 3 ]

/* Write a function named shift that accepts one argument: an Array. The 
  function should remove the first value from the beginning of the Array and 
  return it. */

  function shift(array) {
    let originalLength = array.length;
    if (originalLength === 0) return undefined;

    let value = array[0];

    for (let index = 0; index < originalLength; index += 1) {
      array[index] = array[index + 1];
    }

    array.length = originalLength - 1;
    return value;
  }

  let count4 = [1, 2, 3];
  console.log(shift(count4));           // 1
  console.log(count4);                  // [ 2, 3 ]
