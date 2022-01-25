function greetings(nameArr, jobObj) {
  return console.log(`Hello, ${nameArr.join(' ')}! It's nice to have a ${jobObj.title} ${jobObj.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });