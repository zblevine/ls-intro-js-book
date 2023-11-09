//ex1
const concatStrings = (first, last) => {
  return `${first} ${last}`;
}

console.log(concatStrings('Zach', 'Levine'));

//ex2
const getFourDigits = (num) => {
  //i'd rather use strings!
  const mod1000 = num % 1000;
  const mod100 = num % 100;
  const onesDigit = num % 10;
  const tensDigit = (mod100 - onesDigit)/10;
  const hundredsDigit = (mod1000 - mod100)/100;
  const thousandsDigit =(num - mod1000)/1000;

  return [thousandsDigit, hundredsDigit, tensDigit, onesDigit];
}

console.log(getFourDigits(2893));

/* ex3:
'true' is a string
false is boolean
1.5 and 2 are numbers
undefined is undefined
{foo: 'bar'} is an object
*/

/* ex4 and ex5:
'5' is a string. when the addition operator is used on it, it coerces
the other operand to a string and concatenates. hence, '510'.
however, Number('5') + 10 evaluates to 15
*/

//ex6
console.log(`The value of ${Number('5')} + 10 is 15.`)

/* ex7:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? 

The answer to the above question is no, it will evaluate to undefined.
*/

//ex8 and ex9
const names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
const pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
}

console.log(names);
console.log(pets);

/*ex10-12:
'foo' === 'Foo' is false, the second F is uppercase
parseInt('3.1415') evaluates to 3
'12' < '9' is true! the character '1' comes before '9'
*/
