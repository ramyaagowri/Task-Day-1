
function quicksort(arr,low,high)
{
    if(low>=high)
      return;
    let start=low;
    let end=high;
    let mid=Math.round((start+end)/2);
    let pivot=arr[mid];
    while(start<=end)
    {
        while(arr[start]<pivot)
            {
               start++;
            }
        while(arr[end]>pivot)
        {
            end--;
        }
        if(start<=end)
        {
            let temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
    quicksort(arr,low,end);
    quicksort(arr,start,high); 
    return arr;
}
let arr=[1,6,5,7,4,3];
console.log(quicksort(arr,0,arr.length-1));

