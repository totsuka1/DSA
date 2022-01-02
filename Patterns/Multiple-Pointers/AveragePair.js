//Given a sorted array of integers and a target average, write a function that determines if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches.

function averagePair(arr, targetAvg) {
  if (arr.length < 2) {
    return false;
  } else if (targetAvg > arr[arr.length - 1] || targetAvg < arr[0]) {
    return false;
  }

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let currentAvg = (arr[p1] + arr[p2]) / 2;
    if (currentAvg === targetAvg) {
      return true;
    } else if (currentAvg < targetAvg) {
      p1++;
    } else {
      p2--;
    }
  }

  return false;
}

//Test Cases
averagePair([1, 2, 3], 2.5); //true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); //false
averagePair([], 4); //false
