// var rl = require('readline-sync');
// let rows=rl.question("enter rows");
// var cl = require('readline-sync');
// let col=rl.question("enter cols");
// let Arr=[];
// var element=require('readline-sync');
// for(let i=0;i<rows;i++)
// {
//    Arr[i]=[];
//    for(let j=0;j<col;j++)
//    {
//     Arr[i][j]=element.question();
//    }
// }
// console.log(Arr);





//Linear search
let Arr=[];
let val=require('readline-sync');
let n=val.question("enter the n");
let target=val.question("enter the target");
let boolean=false;
for(let i=0;i<n;i++)
{
   Arr[i]=val.question('enter the array values');
   // if(Arr[i]==-1)
   // {
   //    i=-2;
   // }
   if(Arr[i]==target)
   {
      console.log(`The index of ${n} is ${i}`);
      boolean=true;

   }
}
if(boolean==false)
{
   console.log(-1);
}

