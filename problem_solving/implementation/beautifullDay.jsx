"use strict";

function beautifulDays(i, j, k) {
  // Write your code here

  let int;
  let inverse;
  let count = 0;

  for (int = i; int <= j; int++) {
    inverse =
      parseFloat(int.toString().split("").reverse().join("")) * Math.sign(int);

    if (Math.abs(int - inverse) % k === 0) {
      count = count + 1;
    } else {
      count = count;
    }
  }
  console.log(count);
  return count;
}

beautifulDays(20, 23, 6);
