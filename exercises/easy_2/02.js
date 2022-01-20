/* Write a function that will take a short line of text, and write it to the 
  console log within a box. */

function insertChars(char, quantity) {
  let extraChars = '';

  for (let i = 0; i < quantity; i += 1) {
    extraChars += char;
  }

  return extraChars;
}

function logInBox(string) {
  let outside = '+-' + insertChars('-', string.length) + '-+';
  let buffer = '| ' + insertChars(' ', string.length) + ' |';
  let text = '| ' + string + ' |'

  console.log(`${outside}\n${buffer}\n${text}\n${buffer}\n${outside}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
