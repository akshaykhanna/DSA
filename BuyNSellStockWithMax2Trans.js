/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const l = prices.length;
    if(l<=1) 
        return 0;
    let [leftMin, rightMax, leftProfits, rightProfits] = [
        prices[0], prices[l-1], new Array(l).fill(0), new Array(l+1).fill(0)
    ];
    
    for(let i=1; i<l; i++) {
        leftProfits[i] = Math.max(leftProfits[i-1], prices[i]-leftMin);
        leftMin = Math.min(leftMin, prices[i]);
        
        const j = l - 1 - i;
        rightProfits[j] = Math.max(rightProfits[j+1], rightMax - prices[j]);
        rightMax = Math.max(rightMax, prices[j]);
    }
    // console.log(leftProfits, rightProfits);
    
    var maxProfit = 0;
    for(let i=0; i<l; i++) {
        maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i]);
    }
    return maxProfit;
};
