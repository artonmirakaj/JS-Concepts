// javascript engine - runs JS code in the browser
function jsengine(code) {
  return code.split(/\s+/)
}

console.log(jsengine('var a = 5'));

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

  this is a new feature
*/