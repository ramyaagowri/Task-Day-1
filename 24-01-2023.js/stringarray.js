ip = [
    ["c", "o", "d", "t", "x", "t"],
    ["g", "l", "i", "t", "g", "p"],
    ["l", "a", "t", "a", "m", "w"],
    ["p", "a", "n", "o", "a", "l"],
    ["k", "m", "e", "g", "r", "f"],
    ["z", "w", "l", "m", "t", "o"],
  ];
  let op = "";
  let target = ["ram", "goat", "cod", "akka", "name"];
  
  function next(i, j, k, tar) {
    op += ip[i][j];
    if (i + 1 < ip.length && target[k][tar + 1] == ip[i + 1][j]) {
      next(i + 1, j, k, tar + 1);
    } else if (i - 1 >= 0 && target[k][tar + 1] == ip[i - 1][j]) {
      next(i - 1, j, k, tar + 1);
    } else if (j + 1 < ip.length && target[k][tar + 1] == ip[i][j + 1]) {
      next(i, j + 1, k, tar + 1);
    } else if (j - 1 >= 0 && target[k][tar + 1] == ip[i][j - 1]) {
      next(i, j - 1, k, tar + 1);
    }
  }
  let temp = null;
  
  function check(i, j) {
    for (let k = 0; k < target.length; k++) {
      if (target[k][0] == ip[i][j]) {
        temp = k;
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < ip.length; i++) {
    for (let j = 0; j < ip[i].length; j++) {
      if (check(i, j)) {
        op = "";
        next(i, j, temp, 0);
        if (target.includes(op)) {
          console.log(op);
        }
        temp = null;
      }
    }
  }
  