/* Write a function that counts the number of occurrences of each element in a 
  given array. Once counted, log each element alongside the number of 
  occurrences. */

function countOccurrences(arr) {
  let occurrencesCount = {}
  
  arr.forEach((element) => {
    occurrencesCount[element] = occurrencesCount[element] || 0;
    occurrencesCount[element] += 1;
  })

  for (let key in occurrencesCount) {
    console.log(`${key} => ${occurrencesCount[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
