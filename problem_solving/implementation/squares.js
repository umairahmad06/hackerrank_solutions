function squares(a, b) {
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
      count++;
    }
  }
  console.log(count);
}

squares(380451271, 533690076);
