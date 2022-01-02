//Write a function that accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(string) {
  let longestSubLength = 0;
  let charCounter = {};
  let leftPointer = 0;
  let rightPointer = 0;

  // if (!string.length) {
  //   return 0;
  // }

  while (leftPointer < string.length) {
    if (!charCounter[string[rightPointer]]) {
      charCounter[string[rightPointer]] = 1;
      rightPointer++;
    }

    if (
      charCounter[string[rightPointer]] >= 1 &&
      rightPointer - leftPointer > longestSubLength
    ) {
      longestSubLength = rightPointer - leftPointer;
      charCounter = {};
    } else {
      return longestSubLength;
    }
  }

  // return longestSubLength;
}

//Test Cases
findLongestSubstring(""); //0
findLongestSubstring("rithmschool"); //7
findLongestSubstring("bbbbbb"); //1
