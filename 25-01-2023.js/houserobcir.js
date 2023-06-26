//houserobcirc
let nums=[1,2,3,1];
console.log(rob(nums));
function rob(nums) {
    // Handle base case
    if(!nums.length) return 0
    if(nums.length===1) return nums[0]
    if(nums.length===2) return Math.max(nums[0], nums[1])
    return Math.max(helper(nums.slice(0, nums.length-1)), helper(nums.slice(1)))
};


function helper(segment) {
    if(!segment.length) return 0
    if(segment.length===1) return segment[0]
    if(segment.length===2) return Math.max(segment[0], segment[1])
    const dp = [segment[0], Math.max(segment[0], segment[1])]
    for(let i = 2; i < segment.length; i++) {
        dp[i] = Math.max(segment[i]+dp[i-2], dp[i-1])
    }
    return dp[dp.length-1]
}