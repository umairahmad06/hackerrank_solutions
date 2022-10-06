"use strict";

function findDigits(n) {
  // Write your code here

  // Convert bnumber to seperate units
  let str = n.toString();
  let arr = str.split("");
  let lngth = arr.length;
  let count = 0;

  for (let i = 0; i < lngth; i++) {
    let arrElem = parseInt(arr[i]);
    if (n % arrElem === 0) {
      count++;
    } else {
      count = count;
    }
  }
  return count;
}
findDigits(1012);
