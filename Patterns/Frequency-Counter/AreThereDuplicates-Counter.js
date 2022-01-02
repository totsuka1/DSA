//write a function that takes a variable number of arguments and checks whether there are any duplicates among the arguments passed in. Solve using a frequency counter pattern.

function areThereDuplicates(...args) {
  let argCounter = {};
  for (let arg in args) {
    //note arg corresponds to an index value for each argument, not the argument iteslf.
    argCounter[arguments[arg]] = (argCounter[arguments[arg]] || 0) + 1;
  }

  for (let argKey in argCounter) {
    if (argCounter[argKey] > 1) {
      return true;
    }
  }
  return false;
}

//Test Cases
areThereDuplicates(1, 2, 3); //false
areThereDuplicates(1, 2, 2); //true
areThereDuplicates("a", "b", "c", "a"); //true
