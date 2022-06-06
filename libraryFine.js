"use strict";

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let fine = 0;
  if (y1 > y2) {
    fine = 10000;
    console.log(fine);
    return fine;
  }
  if (y1 < y2) {
    fine = 0;
    console.log(fine);
    return fine;
  } else if (y1 == y2) {
    if (m1 > m2) {
      let no_off_months = m1 - m2;
      fine = 500 * no_off_months;
      console.log(fine);
      return fine;
    } else if (m1 < m2) {
      fine = 0;
      console.log(fine);
      return fine;
    } else if (m1 == m2) {
      if (d1 <= d2) {
        fine = 0;
        console.log(fine);
        return fine;
      } else {
        let no_of_days = d1 - d2;
        fine = 15 * no_of_days;
        console.log(fine);
        return fine;
      }
    }
  }
}

libraryFine(9, 8, 2014, 9, 6, 2014);
