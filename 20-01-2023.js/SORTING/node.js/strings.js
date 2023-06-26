// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 

let str='geeks quiz practice code';
let arr=str.split(' ');
arr=arr.reverse();
let num=arr.join(' ');
//str=arr.toString();
// str='';
// for(let i=arr.length-1;i>=0;i--)
// {
//   str+=(arr[i]+' ');
// }
console.log(num);

//-----------------------------------------

// let a = [1,2,3]
// let b=a;
// b[0]=4
// console.log(a)
// console.log(b)


// let s='IVX'
// let B="";
// let count=0;
//     let chArr =Object.assign([],s);
//     for(let i=0;i<chArr.length;i++)
//     {
//         switch(chArr[i]){
//             case "I":
//                 count+=1;
//                 break;
//             case "V":
//                 count+=5;
//                 break;
//             case "X":
//                 count+=10;
//                 break;
//             case "L":
//                 count+=50;
//                 break;  
//             case "C":
//                 count+=100;
//                 break;
//             case "D":
//                 count+=500;
//                 break; 
//             case "M":
//                 count+=1000;
//                 break;
//             default:
//         }
//     }
//    console.log(count);

// //-----------------------------------------
// let m=March;
// let d=12;
// let days = [ 31, 29, 31, 30, 31, 30,
//     31, 31, 30, 31, 30, 31 ];
// let month = [ "January", "February", "March",
//      "April", "May", "June", "July",
//      "August", "September", "October",
//      "November", "December" ];
// let obj={
//     "January":31,
//     "February":29,
//     "March": 31,
//     "April":30,
//     "May":31,
//     "June":30,
//     "July":31,
//     "August": 31,
// }
// let cnt=183;
//      let curr_month = 0;
//     for(let i = 0; i < 12; i++)
//         if (m == month[i])
//             curr_month = i;
// let cur_date = d;
// while (true)
// {
//     while (cnt > 0 && curDate <= days[cur_month])
//     {
//         cnt -= 1;
//         cur_date += 1;
//     }
//     if (cnt == 0)
//         break;
//     curr_month = (cur_month + 1) % 12;
//     cur_date = 1;
// }

// console.log(cur_date + " " +
//                month[curr_month]);



// const powerNumbers = [1,2,3,4].map(number => number * number)
// [1,2,3,4].forEach(element => {
    
// });
