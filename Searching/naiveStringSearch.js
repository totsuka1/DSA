//Write a function that accepts two strings and checks if the second string exists as a substring of the first string. It returns a count of the number of instances of this substring. Return -1 if no occurance of the substring is found.

//naive O(n^2) approach
function naiveStringSearch(string, substring) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (substring[j] !== string[i + j]) {
        break;
      }
      if (j === substring.length - 1) {
        count++;
      }
    }
  }
  return count;
}

//Test Cases
naiveStringSearch("lorie loled", "lol"); //1
naiveStringSearch("lorie loled", "lo"); //2
naiveStringSearch("lorie loled", "lold"); //-1
