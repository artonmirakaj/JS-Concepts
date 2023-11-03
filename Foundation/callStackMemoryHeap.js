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
const number = 610; //allocate memory for number
const string = 'some text' //allocate memory for string
const human = { //allocate memory for human and its values
  first: 'arton',
  last: 'mirakaj'
}

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();

/*
calculate()
anonymous
FILO
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