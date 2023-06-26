var subsets = function(nums) 
   {
     let reqArr = [[]] 
     for(let ele of nums){  
        let currLen = reqArr.length
        for(let i=0; i<currLen; i++){ 
            let subArr = [...reqArr[i], ele]  
            console.log(subArr); 
            reqArr.push(subArr)       
        }
    }
    //console.log(reqArr);
    return reqArr
};
let nums=[1,2,3];
subsets(nums);