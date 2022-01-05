//Write a recurisve function that returns the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(object) {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === "object") {
      sum += nestedEvenSum(object[key]);
    } else if (typeof object[key] === "number" && object[key] % 2 === 0) {
      sum += object[key];
    }
  }
  return sum;
}

//Test Cases
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
