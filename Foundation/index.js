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


/*
  JS is a single threaded programming language

  - means that only one set of instructions is executed at a time
  - it has only 1 call stack - allows us to run code one at a time
  - synchronous (1 at a time, in order that it appears, only one thing can happen at a time)
*/

/*
  JS Runtime

  JS engine (call stack & memory heap)

  Web API (DOM, fetch(), setTimeout())
  - comes with the browser
  - sends HTTP requests
  - listen to DOM events, click events
  - delay execution
  - caching or DB storage
  - asynchronous - do something in the background and return data once done

  i.e. open window on the browser, this is what the web browser API provides, they're not native to JS
  
  Event Loop
  - is the call stack empty
  - only runs once the call stack is empty, has the entire file been run

  Callback Queue


*/


console.log('1');
setTimeout(() => {console.log('2'), 1000});
console.log('3');