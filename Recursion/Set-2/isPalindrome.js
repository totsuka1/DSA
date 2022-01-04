//Write a recursive function that returns true if the string passed to it is a palindrome. Otherwise, it returns false.

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str.slice(0, 1) === str.slice(str.length - 1)) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

//Cleaner use of string.slice
// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }

//   if (str[0] === str.slice(-1)) {
//     return isPalindrome(str.slice(1,-1));
//   } else {
//     return false;
//   }
// }

//Test Cases
isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
