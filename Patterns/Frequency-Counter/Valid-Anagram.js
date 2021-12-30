//Given two strings, write a function to determine if the second string is an anagram of the first
//Assumptions: all lowercase, single words (no spaces), no special characters

function validAnagram(string1, string2) {
  //Case for if strings are of different lengths (return false)
  if (string1.length !== string2.length) {
    return false;
  }

  //instantiate empty objects to store character counts
  let string1counter = {};
  let string2counter = {};

  //iterate over string1, adding to the count for the character in its object
  for (let char of string1) {
    string1counter[char] = (string1counter[char] || 0) + 1;
  }

  //iterate over string2, adding to the count for the character in its object
  for (let char of string2) {
    string2counter[char] = (string2counter[char] || 0) + 1;
  }

  //iterate over the counter object for string1, and compare values for each key with those in counter object for string 2. If counts aren't equivalent, return false
  for (let charKey in string1counter) {
    if (string1counter[charKey] !== string2counter[charKey]) {
      return false;
    }
  }

  //if successfully iterated over counter objects without breaking, return true
  return true;
}

//Test Cases
validAnagram("", ""); //true
validAnagram("aaz", "zza"); //false
validAnagram("anagram", "nagaram"); //true
