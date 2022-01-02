//Write a function that accepts two parameters - an array of positive integers and a positive integer. The function should retrun the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0.

function minSubArrayLen(arr, target) {
  let currentTotal = 0;
  let bestLength = Infinity;
  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < arr.length) {
    if (currentTotal < target) {
      currentTotal += arr[rightPointer];
      rightPointer++;
    } else if (currentTotal >= target) {
      if (rightPointer - leftPointer < bestLength) {
        bestLength = rightPointer - leftPointer;
      }
      currentTotal -= arr[leftPointer];
      leftPointer++;
    } else {
      break;
    }
  }
  return bestLength !== Infinity ? bestLength : 0;
}

//Test Cases
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); //2
minSubArrayLen([2, 1, 6, 5, 4], 9); //2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); //1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); //0
