//Write a function that accepts an array of integers and a number n. The function should calculate the maximum sum of n-consecutive elements in the array.

// //Naive Solution - nested for loops, O(n^2)
// function maxSubarraySum(arr, num) {
//   if ( num > arr.length){
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i ++){
//     temp = 0;
//     for (let j = 0; j < num; j++){
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

//More optimal solution O(n)
function maxSubarraySum(arr, n) {
  if (arr.length < n || n <= 0) {
    return null;
  }

  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (let j = n; j < arr.length; j++) {
    let tempSum = maxSum - arr[j - n] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

//Test Cases
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10 (2,8)
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //17 (2,5,2,8)
maxSubarraySum([], 4); //null
