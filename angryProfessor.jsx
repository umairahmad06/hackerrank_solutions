"use strict";

function angryProfessor(k, a) {
  // Write your code here
  let lnth = a.length;
  let count = 0;
  for (let i = 0; i <= lnth; i++) {
    if (a[i] <= 0) {
      count++;
    }
  }
  console.log(count);
  if (count >= k) {
    console.log("YES");
    return "YES";
  } else {
    console.log("NO");
    return "NO";
  }
}

angryProfessor(2, [0, -1, 2, 1]);
