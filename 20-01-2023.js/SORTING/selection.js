let arr=[1,6,5,8,7,2];
for(let i=0;i<arr.length;i++)
{
    let min=arr[i];
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<min){
            min=arr[j];
            minIndex=j;        }
    }
    let temp=arr[i];
    arr[i]=min;
    arr[minIndex]=temp;

}
console.log(arr);