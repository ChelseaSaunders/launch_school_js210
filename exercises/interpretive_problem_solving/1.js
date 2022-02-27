"use strict"

// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row
// of switches and toggle every one of them. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches 2,
// 4, 6, and so on. On the third pass, you go back to the beginning again, this
// time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

/*
RULES:
program is provided an input integer
- that number represents two things:
  - total number of lights
  - how many passes to make
Starting with 1, make a pass through lights toggle every 1 switch (every switch)
- then make second pass, toggling every 2nd switch
- then 3rd pass, toggling every third switch
- starting position for all lights is off
- lights are numbered starting at 1, inclusive of number passed as argument

The number of times you have passed matches how often you toggle a switch
Make as many passes as there are lights

Return the numbers corresponding to the light switches that are on in an array


implicit:
input must be positive integer


DATA: input is positive integer
object used to store values
- reurn is array of integers

ALGO:
create function lightsOn that takes one integer as an argument
HELPER METHOD to generate light object (assign lights to retturn of this)
  - create empty object lights.
  - Create for loop that starts at 1 and executes until i s less than or equal
    to input , adding one eahh time
  - add number as key and false as value to object
  - reurn object

create for loop that iterates starting at 1 and until i is grater than or equal
  to input number, adding one each time
  create array of object keys
    iterate through keys using for Each
    if key % i is 0
      if object[key] is true, reassign to false; otherwise reassign to true

call object.keys and filter array to include only keys where value in object is
  true
  reurn above result
*/

// Examples:

function lightsOn(switches) {
  let lights = generateLightObject(switches);
  let list = Object.keys(lights);
  for (let light = 1; light <= switches; light += 1) {
    list.forEach((lightNumber) => {
      if (parseInt(lightNumber, 10) % light === 0) {
        if (lights[lightNumber] === false) {
          lights[lightNumber] = true;
        } else {
          lights[lightNumber] = false;
        }
      }
    });
  }

  return Object.keys(lights).filter((lightOn) => lights[lightOn] === true);
}

function generateLightObject(numberOfSwitches) {
  let lights = {};
  for (let light = 1; light <= numberOfSwitches; light += 1) {
    lights[light] = false;
  }

  return lights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// light switches start at 1