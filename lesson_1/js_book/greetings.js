let name = 'Jane';
let greetingMessage = "Good morning!";
console.log(greetingMessage);
console.log(`Good morning, ${name}!`);

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople(); // "Good morning!"

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good evening!');

greetPeople(); // 'Good evening!'

function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}