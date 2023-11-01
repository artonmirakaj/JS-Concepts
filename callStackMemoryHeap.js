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
call stack
*/