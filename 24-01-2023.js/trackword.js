
// let val=require('readline-sync');
// let arr=[];
// let rows=val.question('enter rows');
// let cols =val.question('enter cols');
// for(let i=0;i<rows;i++)
// {
//  arr[i]=[];
//  for(let j=0;j<cols;j++)
//  {
//      arr[i][j]=val.question('enter the elements');
//  }
// }
// console.log(arr);
ip = [
    ["c", "o", "d", "k", "x", "t"],
    ["g", "c", "i", "n", "g", "p"],
    ["l", "k", "o", "l", "m", "w"],
    ["g", "a", "a", "r", "a", "l"],
    ["k", "f", "t", "g", "r", "f"],
    ["z", "w", "l", "m", "t", "o"],
  ];
  let op = [];
  let target = ["c", "o", "d", "i", "n", "g", "m", "a", "r", "t"];
  
  function next(i, j, tar) {
    op.push(ip[i][j]);
    if (i + 1 < ip.length && target[tar] == ip[i + 1][j]) {
      next(i + 1, j, tar + 1);
    } else if (i - 1 >= 0 && target[tar] == ip[i - 1][j]) {
      next(i - 1, j, tar + 1);
    } else if (j + 1 < ip.length && target[tar] == ip[i][j + 1]) {
      next(i, j + 1, tar + 1);
    } else if (j - 1 >= 0 && target[tar] == ip[i][j - 1]) {
      next(i, j - 1, tar + 1);
    }
  }
  for (let i = 0; i < ip.length; i++) {
    for (let j = 0; j < ip[i].length; j++) {
      if (ip[i][j] == target[0]) 
      {
        op = [];
        next(i, j, 1);
      
      }
    }
  }
  if(op.length==target.length)
  {
    console.log(true);
  }
