//Given two strings, write a function that checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(substring, string) {
  if (substring.length > string.length) {
    return false;
  }

  let substringPointer = 0;
  let stringPointer = 0;

  while (stringPointer < string.length) {
    if (substring[substringPointer] === string[stringPointer]) {
      substringPointer++;
    }
    if (substringPointer === substring.length) {
      return true;
    }
    stringPointer++;
  }

  return false;
}

//Test Cases
isSubsequence("hello", "hello world"); //true
isSubsequence("sing", "sting"); //true
isSubsequence("abc", "abracadabra"); //true
isSubsequence("abc", "acb"); //false
