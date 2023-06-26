let ip = [
    [7, 6, 5, 3, 4, 5],
    [1, 2, 4, 2, 1, 8],
    [5, 4, 3, 5, 6, 7],
    [9, 8, 2, 1, 8, 0],
    [6, 0, 1, 4, 3, 1],
    [3, 8, 7, 7, 6, 4],
  ];
  var sum = 0;
  
  function seq(i, j, l) {
    //let temp = 0;
    if (i + 1 < ip.length && ip[i + 1][j] > ip[i][j]) {
      let l1 = l + 1;
      seq(i + 1, j, l1);
      if (l1 > sum) {
        sum = l1;
        // console.log(sum);
      }
    }
  
    if (i - 1 >= 0 && ip[i - 1][j] > ip[i][j]) {
      let l1 = l + 1;
      seq(i - 1, j, l1);
      if (l1 > sum) {
        sum = l1;
        // console.log(sum);
      }
    }
    if (j + 1 < ip.length && ip[i][j + 1] > ip[i][j]) {
      let l1 = l + 1;
      seq(i, j + 1, l1);
      if (l1 > sum) {
        sum = l1;
        // console.log(sum);
      }
    }
    if (j - 1 >= 0 && ip[i][j - 1] > ip[i][j]) {
      let l1 = l + 1;
      seq(i, j - 1, l1);
      if (l1 > sum) {
        sum = l1;
        // console.log(sum);
      }
    }
  }
  let len = 0;
  for (let i = 0; i < ip.length; i++) {
    for (let j = 0; j < ip[i].length; j++) {
    // console.log("start: "+ip[i][j]);
      let l = 1;
      seq(i, j, l);
    }
  }
  console.log(sum);