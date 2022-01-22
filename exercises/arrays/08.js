/* In this exercise, you will implement your own versions of the 
  Array.prototype.slice and Array.prototype.splice methods according to the  
  following specifications.

The slice function takes three arguments: an array, and two integers 
representing a begin and an end index. The function returns a new array 
containing the extracted elements starting from begin up to but not including 
end. slice does not mutate the original array.

// The splice function changes the contents of an array by deleting existing 
// elements and/or adding new elements. The function takes the following arguments: 
// an array, a start index, a deleteCount, and zero or more elements to be added. 
// The function removes deleteCount number of elements from the array, beginning at 
// the start index. If any optional element arguments are provided, splice inserts 
// them into the array beginning at the start index. The function returns a new 
// array containing the deleted elements, or an empty array ([]) if no elements are 
// deleted. splice mutates the original array.

// Additional specifications:

// slice:
//   - The values of begin and end will always be integers greater than or equal to 
//     0.
//   - If the value of begin or end is greater than the length of the array, set it 
//     to equal the length.

// splice:
//   - The values of start and deleteCount will always be integers greater than or 
//     equal to 0.
//   - If the value of start is greater than the length of the array, set it to 
//     equal the length.
//   - If the value of deleteCount is greater than the number of elements from 
//     start up to the end of the array, set deleteCount to the difference between 
//     the array's length and start.
//   - Takes optional arguments for elements to add to the array; denoted by the 
//   parameters element1 up to elementN. If no elements to add are provided, splice 
//   only removes elements from the array.

// */

function slice(array, begin, end) {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;

  let slicedArr = [];
  for (let index = begin; index < end; index += 1) {
    slicedArr.push(array[index]);
  }

  return slicedArr;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) start = array.length;
  if (deleteCount > (array.length - start)) deleteCount = array.length - start;
  
  let tempArrFirstHalf = []
  let tempArrSecondHalf = []
  let splicedArr= []
  let end = start + deleteCount - 1;

  array.forEach ((element, index) => { 
    if (index < start) { 
      tempArrFirstHalf.push(element); 
    } else if (index >= start && index <= end) {
      splicedArr.push(element);
    } else {
      tempArrSecondHalf.push(element);
    }
  })

  if (args.length > 0) {
    args.forEach((element) => { tempArrFirstHalf.push(element); })
  }

  array.length = 0;

  tempArrFirstHalf.forEach((element) => { array.push(element); });
  tempArrSecondHalf.forEach((element) => { array.push(element); });

  return splicedArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3] 

/* Doesn't work for arr4 and arr5 test cases, might want to work on it more

function splice(array, start, deleteCount, element1, elementN) {
  if (start > array.length) start = array.length;
  if (deleteCount > (array.length - start)) deleteCount = array.length - start;
  
  let tempArr = [];
  let splicedArr= [];
  let isElement1 = true;
  let isElementN = true;
  let end = start + deleteCount;
  if (end > 0) end -= 1;


  for (let index = 0; index < array.length; index += 1) {
    if (index < start || index > end) {
      tempArr.push(array[index]);
    } else if (index >= start && index <= end ) {
      if (isElement1 && element1) {
          tempArr.push(element1);
          isElement1 = false;
      }
      if (isElementN && elementN) {
        tempArr.push(elementN);
        isElementN = false;
      }
    splicedArr.push(array[index]);
    }
  }

  array.length = 0;
  tempArr.forEach((element) => { array.push(element); });

  return splicedArr;
}
*/