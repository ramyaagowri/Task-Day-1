let Arr=[18,12,17,15,13,11,14,19,16];
Arr.sort(function(a,b){return a-b;});

for(let i=1;i<Arr.length-1;i+=2)
{
   let temp=Arr[i];
   Arr[i]=Arr[i+1];
   Arr[i+1]=temp;
}
console.log(Arr);
