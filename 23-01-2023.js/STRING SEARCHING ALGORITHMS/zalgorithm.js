let str1='abbdcabc'
let str2='abc';
let s=str2.concat('$',str1);
arr=[0];
let a=0;b=0;
for(let i=1;i<s.length;i++)
{
   while(s[a]==s[i+b])
   {
    a++;
    b++;
   }
   arr.push(b);
   a=0;
   b=0;
}
console.log(arr);
let start=(str2.length+1);
let end=arr.length;
// console.log(end);
for(let i=start;i<end;i++)
{
    if(arr[i]==str2.length)
    {
        console.log(i-start);
    }
}