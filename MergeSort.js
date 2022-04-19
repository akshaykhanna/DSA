/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function merge(leftList, rightList) {
       let [mergedList, lp,rp, ll, rl] = [ [], 0,0, leftList.length, rightList.length];
       while(lp < ll && rp < rl) {
           if(leftList[lp] <= rightList[rp]) {
               mergedList.push(leftList[lp++]);
           } else {
              mergedList.push(rightList[rp++]); 
           }
       }
       lp < ll && mergedList.push(...leftList.slice(lp));
       rp < rl && mergedList.push(...rightList.slice(rp));
       return mergedList;
    }
    function mergeSort(nums) {
        if(nums.length <= 1) {
            return nums
        }
        const mid = Math.floor(nums.length/2);
        // divide
        const leftList = mergeSort(nums.slice(0, mid));
        const rightList = mergeSort(nums.slice(mid));
        // combine
        return merge(leftList, rightList);
        
    }
    return mergeSort(nums);
};
