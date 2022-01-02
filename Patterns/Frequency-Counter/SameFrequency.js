//Given two positive integers, write a function that determines if the two numbers have the same frequency of digits. This must be done in O(n) time.

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }

  let num1counter = {};
  let num2counter = {};

  for (let digit of num1.toString()) {
    num1counter[digit] = (num1counter[digit] || 0) + 1;
  }

  for (let digit of num2.toString()) {
    num2counter[digit] = (num2counter[digit] || 0) + 1;
  }

  for (let digit in num1counter) {
    if (num1counter[digit] !== num2counter[digit]) {
      return false;
    }
  }
  return true;
}

//Test Cases
sameFrequency(182, 821); //true
sameFrequency(34, 14); //false
sameFrequency(3589578, 5879385); //true
sameFrequency(22, 222); //false
