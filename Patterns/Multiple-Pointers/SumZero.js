//Given a sorted array of integers, return the first pair that sums to zero

//Naive - nested loops O(n^2)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

//Optimized - multiple pointers O(n)
//Start at both ends of the array, compare pointer values, move min or max pointer accordingly until sum is 0
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//Test Cases
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); //[-2,2]
