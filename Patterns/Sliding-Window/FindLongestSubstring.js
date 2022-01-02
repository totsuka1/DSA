//Write a function that accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(string) {
  let longestSubLength = 0;
  let charCounter = {};
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < string.length) {
    if (!(charCounter[string[rightPointer]] >= 0)) {
      charCounter[string[rightPointer]] = rightPointer;
      rightPointer++;
    } else if (charCounter[string[rightPointer]] >= 0) {
      let currentLength = rightPointer - leftPointer;
      longestSubLength = Math.max(currentLength, longestSubLength);
      leftPointer = rightPointer = charCounter[string[rightPointer]] + 1;
      charCounter = {};
    }
  }

  let currentLength = rightPointer - leftPointer;
  longestSubLength = Math.max(currentLength, longestSubLength);
  return longestSubLength;
}

//Test Cases
findLongestSubstring(""); //0
findLongestSubstring("rithmschool"); //7
findLongestSubstring("bbbbbb"); //1
