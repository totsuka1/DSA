//write a function that takes a variable number of arguments and checks whether there are any duplicates among the arguments passed in. Solve using a multiple pointers pattern.

function areThereDuplicates(...args) {
  if (args.length < 2) {
    return false;
  }
  args.sort();

  let p1 = 0;
  let p2 = 1;

  while (p2 < args.length) {
    if (args[p1] === args[p2]) {
      return true;
    }
    p1++;
    p2++;
  }
  return false;
}

//Test Cases
areThereDuplicates(1, 2, 3); //false
areThereDuplicates(1, 2, 2); //true
areThereDuplicates("a", "b", "c", "a"); //true
