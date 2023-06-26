var coinChange = function(coins, amount) {
    let arr = new Array(amount + 1)
    arr.fill(1<<16);
    arr[0] = 0;
    
    for(let a = 0; a <= amount; a++) {
        for (let c of coins) {
            arr[a + c] = Math.min(arr[a + c], arr[a] + 1);
        }
    }
    return (arr[amount] != 65536) ? arr[amount] : -1;
};
console.log((1<<16));
console.log(coinChange([1,2,5],11));
