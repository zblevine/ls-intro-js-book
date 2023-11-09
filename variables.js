//ex1
const greeter = (name) => {
  return `Good Morning, ${name}.\nGood Afternoon, ${name}.\nGood Evening, ${name}.`;
}

console.log(greeter('Zach'))

//ex2
const age = (currAge) => {
  return `You are ${currAge} years old.
In 10 years, you will be ${currAge+10} years old.
In 20 years, you will be ${currAge+20} years old.
In 30 years, you will be ${currAge+30} years old.
In 40 years, you will be ${currAge+40} years old.`
}

console.log(age(30));

//ex3 - since let foo = 'bar' is in bracket scope, the outer console.log doesn't know what foo is!
//ex4 - you can't change a const, so it throws an error after the first three console logs
//ex5 - it will log 'bar', since the console log is in the scope where foo has been initialized to 'bar'
//ex6 - no error, the two const FOO declarations are in different scopes