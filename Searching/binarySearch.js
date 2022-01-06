//Write a function that accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1. This should be done using a binary search approach.

function binarySearch(arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  if (arr[0] === target) {
    return 0;
  }

  while (p1 !== p2) {
    let mid = Math.ceil((p1 + p2) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      p1 = mid;
    } else {
      p2 = mid;
    }
  }
  return -1;
}

// //Alternative Solutions
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//       if(elem < arr[middle]){
//           end = middle - 1;
//       } else {
//           start = middle + 1;
//       }
//       middle = Math.floor((start + end) / 2);
//   }
//   if(arr[middle] === elem){
//       return middle;
//   }
//   return -1;
// }

// // Refactored Version
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//       if(elem < arr[middle]) end = middle - 1;
//       else start = middle + 1;
//       middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }

//Test Cases
binarySearch([1, 2, 3, 4, 5], 2); //1
binarySearch([1, 2, 3, 4, 5], 6); //-1
