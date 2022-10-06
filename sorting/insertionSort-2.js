"use strict";
function insertionSort2(arr) {
  // Write your code here

  function swap(arr, i, j) {
    let first = arr[i];
    let second = arr[j];
    arr[i] = second;
    arr[j] = first;
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
    console.log(arr.join(" "));
  }
}

insertionSort2([3, 4, 7, 5, 6, 2, 1]);
