//Write a function that accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it. Factorial zero (0!) is always 1.

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

//Test Cases
factorial(1); //1
factorial(2); //2
factorial(4); //24
factorial(7); //5040
