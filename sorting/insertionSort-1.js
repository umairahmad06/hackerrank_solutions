"use strict";
function insertionSort1(arr) {
  // Write your code here
  let num = arr[arr.length - 1];
  let placed = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (num < arr[i]) {
      arr[i + 1] = arr[i];
      console.log(arr.join(" "));
    } else if (num > arr[i]) {
      arr[i + 1] = num;
      console.log(arr.join(" "));
      placed = true;
      break;
    }
  }
  if (!placed) {
    arr[0] = num;
    console.log(arr.join(" "));
  }
}

insertionSort1([2, 4, 6, 8, 1]);
