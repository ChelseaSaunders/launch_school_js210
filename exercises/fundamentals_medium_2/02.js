/* Read through the following code. Currently, it does not log the expected 
  result. Explain why this happens, then refactor the code so that it works as 
  expected. */

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
// will only return true if person and otherPerson are the same object

console.log(person.name === otherPerson.name);

// OR

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true