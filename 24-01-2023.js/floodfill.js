let ip = [
    [1, 0, 1, 2],
    [2, 1, 1, 3],
    [0, 1, 2, 0],
    [0, 1, 2, 2],
  ];
  let a = 1,
    b = 1;
  let val = ip[a][b];
  function flood_fill(i, j, target) {
    if (ip[i][j] == val) {
      ip[i][j] = target;
    }
    if (i + 1 < ip.length && ip[i + 1][j] == val) {
      flood_fill(i + 1, j, target);
    } 
    if (i - 1 >= 0 && ip[i - 1][j] == val) {
      flood_fill(i - 1, j, target);
    }
    if (j + 1 < ip.length && ip[i][j + 1] == val) {
      flood_fill(i, j + 1, target);
    }
    if (j - 1 >= 0 && ip[i][j - 1] == val) {
      flood_fill(i, j - 1, target);
    }
  }
  
  flood_fill(a, b, 4);
  console.log(ip[0]);
  console.log(ip[1]);
  console.log(ip[2]);
  console.log(ip[3]);