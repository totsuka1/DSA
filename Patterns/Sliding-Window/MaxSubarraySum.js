//Given an array of integers and a number, write a function that finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that a subarray must consist of consecutive elements from the original array

function maxSubarraySum(arr, num) {
  if (arr.length < num || num <= 0) {
    return null;
  }

  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum += arr[j] - arr[j - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

//Test Cases
maxSubarraySum([100, 200, 300, 400], 2); //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); //5
maxSubarraySum([2, 3], 3); //null
