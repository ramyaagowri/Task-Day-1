let arr=
[
    [1,0,1,0,0],
    [1,0,1,1,1],
    [1,1,1,1,1],
    [1,0,0,1,0]
];
//let prev=[];
let curr=[];
let max=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        if(i==0)
        {
           curr[j]=arr[i][j];
        }        
        else
             if(i==arr.length-1 && arr[i][j]==0){
                curr[j]=0;}
             else{
                curr[j]+=arr[i][j];}
    }
    let temp=hist(curr);
        if(temp>max){
            max=temp;
        }
    console.log(curr)
   
    
}
console.log(max);
// let heights=[4,0,3,0,0];
// console.log(hist(heights));
let heights=[4,0,3,0,0];
function hist(heights){
    let max=0;
    for(let i=0;i<heights.length;i++)
    {
        let base=heights[i];
        let width=1;
        for(let j=i+1;j<heights.length;j++)
        {
            if(heights[j]<base)
            {
                break;
            }
            width++;
        }
        for(let j=i-1;j>=0;j--)
        {
            if(heights[j]<base)
            {
                break;
            }
            width++;
        }
        let area=heights[i]*width;
        max=Math.max(area,max);
        //console.log(max);

    }
return max;
}

