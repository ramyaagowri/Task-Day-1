function max(x,y)
{
	return (x > y)? x : y;
}
function lps(seq)
{
	let n = seq.length;
	let i, j, cl;
	let L = new Array(n);
	for(let x=0;x<n;x++)
	{
		L[x] = new Array(n);
		for(let y = 0; y < n; y++)
			L[x][y] = 0;
	}
		for (i = 0; i < n; i++)
		L[i][i] = 1;
		
		for (cl = 2; cl <= n; cl++)
		{
			for (i = 0; i < n -cl + 1; i++)
			{
				j = i + cl - 1;
				if (seq[i] == seq[j] && cl == 2)
					L[i][j] = 2;
				else if (seq[i] == seq[j])
					L[i][j] = L[i + 1][j - 1] + 2;
				else
					L[i][j] = max(L[i][j - 1], L[i + 1][j]);
			}
		}
			
		return L[0][n - 1];
}
let seq = "bbbab";
let n = seq.length;
console.log("The length of the lps is "+ lps(seq));
