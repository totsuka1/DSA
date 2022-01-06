//Write a function that accepts an array and a value, and returns the first index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, target) {
  for (let index of arr) {
    if (arr[index] === target) {
      return parseInt(index);
    }
  }
  return -1;
}

// //Alternative to avoid having to parseInt
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i
//     }
//   }
//   return -1
// }

//Test Cases
linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([10, 15, 20, 25, 30], 14); // -1
