// let n=4;
// let k=2;
// let allCom=Math.pow(k,n);
// let arr=[];
// let a=65;
// //console.log(result-k);
// for(let i=0;i<k;i++)
// {
//     arr[i] = String.fromCharCode(a++);
// }
// for(let j=0;j<Math.power;j++)
// {
//     let bin=a[j].toString(2);
//     for(let k=0;k<bin.length;k++)
//     {
//         // if(bin[k]==0){
//         // }
//     }
// }
// console.log(arr);


// function countWays(n, k)
// {
//     let total = k;
//     let mod = 1000000007;
//     let same = 0, diff = k;
//     for (let i = 2; i <= n; i++) {
//         same = diff;
//         diff = total * (k - 1);
//         diff = diff % mod;
//         total = (same + diff) % mod;
//     }
//     return total;
// }
// let n = 3, k = 2;
// console.log(countWays(n, k));
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 3;
matrix.forEach((ele) =>{
    ele.forEach((item)=>{
        if(item==target)
            return true;
        return false;
        
})
})
    
