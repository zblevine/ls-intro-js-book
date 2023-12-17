//ex1 - 4, 5, 0, 3, 101

//ex2
const myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
console.log(myArray);
console.log(myArray.filter((val) => val % 2 === 0));

//ex3
const myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

console.log(myArray2.reduce((acc, curr) => acc.concat(curr.filter((val) => val % 2 === 0)), []));

//ex4 - using myArray definition on line 4
console.log(myArray.map(ele => ele % 2 ? 'odd' : 'even'));

//ex5
const findIntegers = (arr) => arr.filter(item => Number.isInteger(item));

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

//ex6
const oddLengths = (arr) => arr.map(ele => ele.length).filter(len => len % 2)

let myArray3 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(myArray3)); // => [1, 5, 3]

//ex7
const sumOfSquares = (arr) => arr.reduce((acc, curr) => acc + (curr * curr), 0)

let myArray4 = [3, 5, 7];
console.log(sumOfSquares(myArray4)); // => 83

//ex8 - uses myArray3 definition on line 30
const oddLengthsReduce = (arr) => arr.reduce((acc, curr) => {
  return (curr.length % 2) ? acc.concat(curr.length) : acc
}, []);
console.log(oddLengthsReduce(myArray3)); // => [1, 5, 3]

//ex9
const isThree = (arr) => !!(arr.filter(ele => ele === 3).length)

console.log(isThree([1, 3, 5, 7, 9, 11]));
console.log(isThree([]));
console.log(isThree([2, 4, 6, 8]));

//ex10 - it's just arr[1][3] = 606