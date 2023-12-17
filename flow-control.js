//ex1 - false, true, 3, 3, false, true, false, false, false, true, false, true

//ex2

const evenOrOdd = (number) => number % 2 ? 'odd' : 'even';
console.log(evenOrOdd(4));
console.log(evenOrOdd(9));

//ex3
function evenOrOddv2(input) {
  if(!Number.isInteger(input)) {
    return 'Input must be a number';
  }

  return input % 2 ? 'odd' : 'even';
}

console.log(evenOrOddv2(4));
console.log(evenOrOddv2(9));
console.log(evenOrOddv2('giraffe'));
console.log(evenOrOddv2(1.2));

//ex4 - it logs 'Product2', 'Product3', 'Product not found!' since there is no break after the '113' case triggers

/* ex5
if(foo()) {
  return 'bar';
} else {
  return qux();
}
*/

//ex6 - it logs 'Not Empty', empty array is not falsy

//ex7
const allCapsMaybe = (string => string.length > 10 ? string.toUpperCase() : string);

console.log(allCapsMaybe('asdf'));
console.log(allCapsMaybe('Go Chicago Bulls!'));

//ex8
function numberRange(num) {
  if(num >= 0) {
    if(num > 50) {
      if(num > 100) {
        console.log(`${num} is greater than 100`);
      } else {
        console.log(`${num} is between 51 and 100`);
      }
    } else {
      console.log(`${num} is between 0 and 50`);
    }
  } else {
    console.log(`${num} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

//ex9 - false, true, 3, false, 3, 3, undefined, null

//ex10 - 5 and 7, 0 and 0, 4 and 42, 3 and 42