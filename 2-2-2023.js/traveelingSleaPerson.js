let n = 4;
let MAX = 1000000;
let dist = [
	[0, 0, 0, 0, 0], 
    [0, 0, 10, 15, 20],
	[0, 10, 0, 25, 25], 
    [0, 15, 25, 0, 30],
	[0, 20, 25, 30, 0],
];

let memo = new Array(n + 1);
for (let i = 0; i < memo.length; i++) {
	memo[i] = new Array(1 << (n + 1)).fill(0)
    
}
//console.log(memo);
function fun(i, mask)
{
	if (mask == ((1 << i) | 3))
	return dist[1][i];
	
	if (memo[i][mask] != 0)
	return memo[i][mask];

	let res = MAX;

	for (let j = 1; j <= n; j++){
	if ((mask & (1 << j)) && j != i && j != 1)
		res = Math.min(res, fun(j, mask & (~(1 << i)))
		+ dist[j][i]);
        
    }
	return memo[i][mask] = res;
}

let ans = MAX;
for (let i = 1; i <= n; i++){
   
	ans = Math.min(ans, fun(i, (1 << (n + 1)) - 1)
	+ dist[i][1]);
    //console.log(ans);
}
console.log("The cost of most efficient tour " + ans);

//console.log((4 + 3));
//console.log(fun(2, (1 << (n + 1)) - 1))
// && j != i && j != 1);