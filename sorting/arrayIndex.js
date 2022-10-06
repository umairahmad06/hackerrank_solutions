"use strict";
function introTutorial(V, arr) {
  // Write your code here

  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == V) {
      return i;
    }
  }
}

introTutorial(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
