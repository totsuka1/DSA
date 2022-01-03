//Write a function that accepts a number and adds up all the numbers from 0 up to and including the number passed to the function.

function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + recursiveRange(num - 1);
}

//Test Cases
recursiveRange(6); // 21
recursiveRange(10); // 55
