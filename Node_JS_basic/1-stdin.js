// 1-stdin.js
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name
rl.question('Welcome to Holberton School, what is your name?', (name) => {
  // Output the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Add a listener for the 'close' event
rl.on('close', () => {
  console.log('This important software is now closing');
});
