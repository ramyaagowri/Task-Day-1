let arr=[1,2,3,4,5];
// let val=require('readline-sync');
// let target=val.question("enter the target value");
let target=4;
let start=0;
let end=arr.length-1;
let boolean=false;
while(start<=end)
{
    let mid=(start+end)/2;
    if(target>arr[mid])
    {
        start=mid+1;
    }
    else if(target<arr[mid])
    {
        end=mid-1;
    }
    else{
        boolean=true;
        console.log(Math.round(mid));
        return mid;
        }
}
if(boolean==false){
    console.log(-1);
}