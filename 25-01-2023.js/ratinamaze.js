let arr = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1]];
  let n = arr.length;
  // console.log(arr[n - 1][n - 1]);
  function way(i, j, n, str) {
    if (i == n - 1 && j == n - 1) {
      console.log(str.slice(1, str.length));
      return;
    }
    if (i + 1 < n && arr[i][j] == 1) {
      // if (i != 0 && j != 0) {
      str += "d";
      // }
      way(i + 1, j, n, str);
    }
  
    if (j + 1 < n && arr[i][j] == 1) {
      // if (i != 0 && j != 0) {
      str += "r";
      // }
      way(i, j + 1, n, str);
    }
  }
  
  way(0, 0, n, "");