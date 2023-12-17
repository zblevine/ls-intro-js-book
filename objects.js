//ex1 - just person.name or person['name']

//ex2 - i wasn't sure about just 1 (not the string), but hey they are all valid

//ex3
let myArray = {
  0: 'foo',
  1: 'bar',
  2: 'baz',
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//ex4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

console.log(Object.keys(obj).map(ele => ele.toUpperCase()))

//ex5 - just call Object.create on myProtoObj

//ex6 - arr/function/object are objects, foo (variable) is neither, rest are primitives

//ex7 - not the same, Object.keys only returns own properties, unlike for/in loop

//ex8
function copyObj(obj, keyArr = Object.keys(obj)) {
  return keyArr.reduce((acc, curr) => {
    acc[curr] = obj[curr];
    return acc;
  }, {});
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

//ex9 - "hi" and "hello", the object is mutable

//ex10 - six primitives and four objects (three nested arrays and an empty obj)

//ex11 - obj['bar'][3]['xyz'] = 606

//ex12
function foo(bar) {
  console.log(bar, bar, bar);
}

const bar = foo; //new addition from me

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

//ex13
function foo2(bar) {
  console.log(bar());
}

foo2(function() {return 'Welcome'});    // Should print 'Welcome'
foo2(function() {return 3.1415});    // Should print 3.1415
foo2(function() {return [1,2,3]});;    // Should print [1, 2, 3]

/*
ex14:
my guesses: variables - howdy, foo, and arguments to function hello (missed function names)
objects: return from xyzzy, hello function, xyzzy function, array in return from xyzzy [3, 4, 5], empty obj in return from xyzzy (got em all)
object prop names: a, b, c, d (missed array indices)
primitives: ' ', 'Hi', 'Grace', 1, 2, 3, 4, 5 - arguably 'a', 'b', 'c', 'd' as well but im not sure (missed array indices)

ex15:
variables: bar, arg1, arg2, qux, result (overlooked foo, whoops)
object prop names: abc, def, ghi, jkl, mno, pqr, indices for qux.abc, indices for qux.abc[3]
objects: bar, qux, qux.abc, qux.abc[3] - i don't think result is yet if code hasn't been run
primitives: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, abc, def, ghi, jkl, mno, pqr, 'Victor', 'Antonina', indices for qux.abc, indices for qux.abc[3]
*/