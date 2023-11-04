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


// hidden classes
/*
  you want to try and instantiate your object properties in the same order so that hidden classes
  as soon as you start introducing things in different orders, it will run slowly
  add objects in the constructor
*/


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

  i.e. open 'window' on the browser, this is what the web browser API provides, they're not native to JS
  
  Event Loop
  - is the call stack empty
  - only runs once the call stack is empty, has the entire file been run

  Callback Queue
*/

/*
  Node is a runtime, uses JS outside of the browser, but async

  global = api (runtime)
  window = api (browser)
*/

/*
  JS Engine
  - reading and executing code

  1. we need a place to store and write information

  memory heap
  - a place to store info
  - allocate memory, use memory, and release memory
  - objects, complex data structures, arrays, functions are stored here

  call stack - first in, last out (FILO)
  - place to keep track of where we are in the code so that we can run the code in order
  - stores functions and variables as your code executes
  - variables are stored here
*/

// call stack
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();

/*
7
9 - 2
subtractTwo()
calculate()
anonymous
*/

/*
  call stack
  - when we keep calling functions nested inside of each other over and over
  - i.e. Recursion

  you get maxium call stack size exceeded
*/

// garbage collection
// JS frees up memory, on the heap to prevent leaks, we dont use and collects the garbage

// memory leaks - pieces of memory that the application have used in the past, but is not needed
// any longer, but has not yet returned back to us, to the pool of free memory
/*
  1. global variables
  var a = 1;
  var b = 2;
  var c = 3

  2. event listeners
  var.element = document.getElementById('button');
  element.addEventListener('click', onClick)

  3. setInterval
  setInterval(() => {
    // referencing objects...
  })
*/