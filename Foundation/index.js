// javascript engine - runs JS code in the browser
function jsengine(code) {
  return code.split(/\s+/)
}

// console.log(jsengine('var a = 5'));

/*
  Interpreters vs Compilers

  There are 3 ways of translating code so that our compiters can understand

  Interpreter
  - read line by line

  Compiler
  - works ahead of time to create a translation of the code we've written
  - takes a bit longer to start up
  - they dont repeat the translation for each pass through (i.e. Looping)

  JIT Compiler (Just In Time)
  - combines interpreter and compiler
  - is faster and optimizes code
*/

/*
  in order to help the JS Engine, we want to be really careful with these items:

  eval()
  arguments
  for in
  with
  delete - change hidden classes so they dont match up
*/

// inline caching
/*
  code that executes the same method repeatedly, called multiple times
  it will cache that and not re-run it again
*/
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Arton',
  lastName: 'Mirakaj'
}

console.log(findUser(userData));

// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;

obj2.b = 30;
obj2.a = 100;

/*
  you want to try and instantiate your object properties in the same order so that hidden classes
  as soon as you start introducing things in different orders, it will run slowly
  add objects in the constructor
*/

// we will talk about call stack and memory heaps next