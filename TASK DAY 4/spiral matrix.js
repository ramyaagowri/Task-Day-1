let n = 4;
let m = 4;
let arr = 
    [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11,12,13,14],
    [16,17,18,19],
    ];
let str='';

let col = m-1;
let row = n-1;
let k=0;let l=0;
let i=0;let j=0;
while(k<=row && l<=col)
{
  
    for(j=l;j<=col;j++)
    {
        i=k;
        str+=arr[i][j];
        str+=' ';
    }
    k++;

    for(i=k;i<=row;i++)
    {
        j=col;
        str+=arr[i][j];
        str+=' ';
    }
    col--;

    for(j=col;j>=l;j--)
    {
        i = row;
        str+=arr[i][j];
        str+=' ';
    }
    
    row--;
    for(i=row;i>=k;i--)
    {
        j =l;
        str+=arr[i][j];
        str+=' ';
    }
    l++;

}

//console.log(str);
const arr1 = str.split(' ');
console.log(arr1);
let res = [];
while(arr1.length) res.push(arr1.splice(0,n));
res.pop();
console.log(res);