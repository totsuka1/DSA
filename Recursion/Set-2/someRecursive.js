//Write a recursive function that accepts and array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback) {
  if (!arr.length) {
    return false;
  }

  return callback(arr.splice(0, 1)) ? true : someRecursive(arr, callback);
}

//Test Cases
const isOdd = (val) => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false
