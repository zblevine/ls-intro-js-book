const rlSync = require('readline-sync')

//ex1
function ageLoops(age) {
  const currAge = parseInt(age)
  let output = `You are ${currAge} years old.`;
  for(let i = 1; i<=4; i++) {
    output += `\nIn ${i*10} years, you will be ${currAge + i*10} years old.`
  }
  return output;
}

console.log(ageLoops(rlSync.question("How old are you? ")));

//ex2
function factorialLoop(n) {
  output = 1;
  for(let i = 1; i <= n; i++) {
    output = output * i;
  }
  return output;
}
console.log(factorialLoop(3));     // => 6
console.log(factorialLoop(4));     // => 24
console.log(factorialLoop(5));     // => 120

//ex3 - counter = 1 is an assignment at each turn, you want to check for counter == 1 to do an "is it equal" check

//ex4 - i initially thought it would output 0, 1, 2, 3, 4 - makes sense that the increment happens first

//ex5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0; //initial value, also where I have refactored

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//ex6
function factorial(n) {
  if(n < 2) {
    return 1;
  }

  return n * factorial(n-1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320



