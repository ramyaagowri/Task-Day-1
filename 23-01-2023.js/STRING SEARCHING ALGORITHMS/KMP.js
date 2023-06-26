let text = "abxabcabcaby";
let pat = "abcaby";
searchKmp(text,pat);
function searchKmp(text,pat)
{
    let m=text.length;
    let n=pat.length;
    let lps=[];
    findLps(pat,n,lps);
    let i=0;j=0;
    while(i<m)
    {
        if(text[i]==pat[j])
        {
            i++;
            j++
            if(j==n)
            {
            console.log("The pos is "+ (i-j));
            }
        }
        else 
        {
           if(j==0)
           {
            i++;
           }
           else
           {
            j=lps[j-1];
           }
        }
    }
}
function findLps(pat,n,lps)
{
        let len=0;
        let i=1;
        lps[0]=0;
        while(i<n)
        {
            if(pat.charAt(len)==pat.charAt(i))
            {
                len++;
                lps[i]=len;
                i++;
            }
            else
            {
                if(len==0)
                {
                    lps[i]=len;
                    i++;
                    
                }
                else
                {   
                    len=lps[len-1];
                }
            }
        }
        console.log(lps);
   return lps;
}