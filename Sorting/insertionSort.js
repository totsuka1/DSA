//Write an insertionSort function

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let currentVal = arr[i]
//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j+1] = arr[j]
//     }
//     arr[j+1] = currentVal
//   }
//   return arr
// }

function insertionSort(arr) {
  let currentVal, j;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//Test Cases
insertionSort([12, 43, 1, 22, 75]); // [1,12,22,43,75]
