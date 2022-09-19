"use strict";

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  if (Math.abs(x - z) == Math.abs(y - z)) {
    return "Mouse C";
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}

catAndMouse(1, 2, 3);
