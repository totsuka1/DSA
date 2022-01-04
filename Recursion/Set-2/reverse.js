//Write a recursive function that accepts a string and returns a new string in reverse.

function reverse(string) {
  let arr = string.split("");
  let revArr = [];

  function recRev(arr) {
    if (!arr.length) {
      return;
    }

    revArr.push(arr.pop());
    recRev(arr);
  }

  recRev(arr);
  return revArr.join("");
}

// //Better solution (pure)
// function reverse(str) {
//   if (str.length <= 1) return str
//   return reverse(str.slice(1)) + str[0]
// }

//Test Cases
reverse("awesome"); //'emosewa'
reverse("rithmschool"); //'loohcsmhtir'
