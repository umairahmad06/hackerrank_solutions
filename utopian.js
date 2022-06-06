function utopianTree(n) {
  // Write your code here

  let height = 1;
  if (n == 0) {
    return height;
  } else {
    for (i = 1; i <= n; i++) {
      if (i % 2 == 1) {
        height = height * 2;
        newHeight = console.log("Height after spring,", height);
      } else {
        height = height + 1;
        console.log("Height after summer,", height);
      }
    }
    return height;
  }
}
utopianTree(5);
// Language: javascript
