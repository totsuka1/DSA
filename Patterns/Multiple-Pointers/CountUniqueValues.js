//Implement a function that accepts a sorted array and counts the unique values in the array. There can be negative numbers, but will always be sorted.

function countUniqueValues(arr) {
  let uniqueCounter = 0;
  if (!arr.length) {
    return uniqueCounter;
  }

  uniqueCounter++;

  let pointer1 = 0,
    pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer1] !== arr[pointer2]) {
      uniqueCounter++;
    }
    pointer1++, pointer2++;
  }

  return uniqueCounter;
}

//Test Cases
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
countUniqueValues([]); //0
countUniqueValues([-2, -1, -1, 0, 1]); //4

//Alternate solution using a for loop
// function countUniqueValues(arr){
//   if(arr.length === 0) return 0;
//   let i = 0;
//   for(let j = 1; j < arr.length; j++){
//       if(arr[i] !== arr[j]){
//           i++;
//           arr[i] = arr[j]
//       }
//   }
//   return i + 1;
// }
