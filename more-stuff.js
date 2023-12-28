//ex1: wouldn't it log [1, 4, 3] since array2 and array1 point to the same memory location?

//ex2: you either want to log the string "greeting", define the variable greeting or do a function call which would be greeting()

//ex3: just console.log(Math.sqrt(37))

//ex4: Math.max(...arr) would do it assuming array passed in

//ex5: input string, output = array of word lengths in reverse order (assuming space delimiter)

//ex6
const allMatches = (wordList, regex) => wordList.filter((word) => regex.test(word));

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//ex7: exception handling is code that anticipates possible errors and plans for specific behavior / code exit when errors come up. otherwise bugs can come up on user input (answer on site does explicitly mention try/catch)

//ex8
const isNotANumber = (val) => !(val === val)

console.log(isNotANumber('hello'));
console.log(isNotANumber(NaN));
console.log(isNotANumber(4));

//ex9
const isNegativeZero = (val) => (1/val) === -Infinity;

console.log(isNegativeZero(4))
console.log(isNegativeZero(0))
console.log(isNegativeZero(-0))

//ex10: I got this one wrong - I thought it might throw an error. But it does coercion. Even so, I might have guessed 6 rather than 5. Tough! I see why using the ++ operator is not recommended outside of loop definition