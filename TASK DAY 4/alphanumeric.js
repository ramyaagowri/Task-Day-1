let str="123ABC45DEF";
let sum=0;
for(let i=0;i<str.length;i++)
{
    if(isNaN(str.charAt(i)))
    {
        str=str.replace(str.charAt(i)," ");
        
    }
    
}

var array = str.split(" ").map(Number);
console.log(array);
for(i=0;i<array.length;i++)
{
    sum+=array[i];
}
console.log(sum);