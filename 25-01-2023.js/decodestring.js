let rows = 3;
let str = "My NAME IS KHAN";
//console.log(str.length);
let col = Math.round(str.length / rows) + 2;
//console.log(col);
str = str.replaceAll(" ", "*");
let s = "";
let a = "";

let n = str.length - 1;

// function asterisk(k)
// {
//     for(let i=0;i<k;i++)
//     {
//         console.log("*");
//     }
// }
for (let i = 0; i < rows; i++) {
  for (let j = i; j < str.length; j += rows) {
    s += str[j] + " ";
  }
  s += "      ";

  if (i > rows - 2) {
  } else {
    a += "* ";
    s += a;
  }
}

console.log(s);

let arr = s.trim().split("      ");
console.log(arr);
for (let i = arr.length; i >= 0; i--) {
  if (arr[i] == " ") {
    delete arr[i];
  } else {
    if (arr[i] != undefined) {
      console.log(arr[i].trim());
    }
  }
}

// let arr=s.split(' ');
// arr=arr.reverse();
// console.log(arr);
// let start=arr.length-1;
// let end=Math.round((str.length)/rows);
// let arr1=[];
// arr.forEach(element => {
//   arr1.push(arr.splice(start,end));
//   end++;
// });
// console.log(arr1);
