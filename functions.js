const rlSync = require('readline-sync');

//ex1 - console logs 1. nothing happens in foo function besides variable declaration

//ex2
const greeterConcat = () => {
  const firstName = rlSync.question("What is your first name? ");
  const lastName = rlSync.question("What is your last name?" );
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(greeterConcat());

//ex3
const multiply = () => {
  const firstNumber = rlSync.question("Enter the first number: ");
  const secondNumber = rlSync.question("Enter the second number: ");
  return `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
}

console.log(multiply());

