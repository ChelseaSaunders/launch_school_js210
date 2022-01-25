/* Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 200 (inclusive).

Example Output:

Teddy is 69 years old! */

function generateRandomAge() {
  let difference = 200 - 20 + 1;
  let age = Math.floor(Math.random() * difference) + 20;
  return age;
}

function teddysAge(){
  let age = generateRandomAge();
  console.log(`Teddy is ${age} years old! `);
}

teddysAge();