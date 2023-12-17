const rlSync = require('readline-sync')

//ex1
console.log(`Hello, ${rlSync.question("What is your name? ")}!`);

//ex2
console.log(`Hello, ${rlSync.question("What is your first name? ")} ${rlSync.question("What is your last name? ")}!`);

//ex3
const age = (answer) => {
  const currAge = parseInt(answer);
  return `You are ${currAge} years old.
In 10 years, you will be ${currAge+10} years old.
In 20 years, you will be ${currAge+20} years old.
In 30 years, you will be ${currAge+30} years old.
In 40 years, you will be ${currAge+40} years old.`
}

console.log(age(rlSync.question("How old are you? ")));