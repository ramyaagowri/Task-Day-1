// let p=[5,4,6,2,7];
// let  n = 5;
//let m= new Array(n); 
// for (var i = 0; i < n; i++) {
//   m[i] = [];
//   for(let j=0;j<n;j++)
//   {
//     m[i][j]=0;
//   } 
// }

// let m = Array(n).fill(0).map(x=>Array(n).fill(0));
// let s = Array(n).fill(0).map(x=>Array(n).fill(0));
// let j,min,q;
// for(let d=1;d<n-1;d++)
// {
//     for(let i=1;i<n-d;i++)
//     {
//         j=i+d;
//         min=32767;
//         for(let k=i;k<=j-1;k++)
//         {
//             q=m[i][k]+m[k+1][j]+p[i-1]*p[k]*p[j];
//             if(q<min)
//             {
//                 s[i][j]=k;
//             }
//         }
//         m[i][j]=min;
//     }
//     console.log(m[1][n-1]);
// }
//onsole.log(s);

function MatrixChainOrder(p , n)
{
    var m = Array(n).fill(0).map(x => Array(n).fill(0));
 
    var i, j, k, L, q;
    for (i = 1; i < n; i++)
        m[i][i] = 0;
    for (L = 2; L < n; L++)
    {
        for (i = 1; i < n - L + 1; i++)
        {
            j = i + L - 1;
            if (j == n)
                continue;
            m[i][j] = Number.MAX_VALUE;
            for (k = i; k <= j - 1; k++)
            {
                q = m[i][k] + m[k + 1][j]
                    + p[i - 1] * p[k] * p[j];
                if (q < m[i][j])
                    m[i][j] = q;

            }
        }
    }
 
    return m[1][n - 1];
}
 
var arr = [ 1, 2, 3, 4 ];
var size = arr.length;
 console.log(
    "Minimum number of multiplications is "
    + MatrixChainOrder(arr, size));
 










// s.forEach((elements)=>{
//     console.log(elements);
// })
