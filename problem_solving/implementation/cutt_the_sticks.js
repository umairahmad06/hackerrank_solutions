"use strict";

function cutTheSticks(arr) {
  // Write your code here
  // Find Minimum
  let newArray = [...arr];
  let result = [];

  while (newArray.length >= 1) {
    let min = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
      if (min <= newArray[i]) {
        min = min;
      } else {
        min = newArray[i];
      }
    }
    let length = newArray.length;

    result.push(length);

    //Create a new array with minimum removed
    const filteredArray = newArray.filter((element) => element !== min);
    let returnedArray = [];

    for (let i = 0; i < filteredArray.length; i++) {
      let value = filteredArray[i] - min;
      returnedArray.push(value);
    }
    console.log(newArray);

    newArray = [...returnedArray];
  }
  return result;
}

cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]);
