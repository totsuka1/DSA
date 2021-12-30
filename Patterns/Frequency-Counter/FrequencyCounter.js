//Using hash table objects to store frequencies of occurances
//Use cases - comparing two arrays/strings

//Example - comparing two arrays of numbers. Returns true if second array contains square of the values in the first array (insensitive to order)
//O(n) time
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//Test Cases
same([1, 2, 3, 2], [9, 1, 4, 4]); //true
same([1, 2, 3], [9, 1, 4, 4]); //false
same([1, 2, 3, 5], [9, 1, 4, 4]); //false
