/* Read through the code below. What values will be logged to the console? Can 
  you explain these results? */

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4; // adds empty element which will return as undefined
console.log(languages); // ['JavaScript', 'Ruby', 'Python', ,1 empty item>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']; line 12 removes all elements afetr the first
console.log(languages.length); // 1

languages.length = 3; 
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <one empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3