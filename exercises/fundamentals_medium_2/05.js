/* What will the following program log to the console? Can you explain why? */

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3; the above does not add to the length or add an index
console.log(Object.keys(array).length); // 4; line 5 does add a key

array[-2] = 'Watermelon'; 
console.log(array.length); // still 3; neg numbers don't add indexes/elements
console.log(Object.keys(array).length); // 5; line 9 does add a key