"use strict";

function pickingNumbers(a) {
  // Write your code here
  let l = a.length;
  let subArray = [];
  let count = 1;
  for (let i = 0; i <= l; i++) {
    if (Math.abs(a[i] - a[i + 1]) < 2) {
      count = count + 1;
      subArray.push(a[i]);
    } else {
    }
  }
  console.log(count);
  //   console.log(subArray);
}

pickingNumbers([1, 2, 3, 5, 6, 7, 8, 9]);
