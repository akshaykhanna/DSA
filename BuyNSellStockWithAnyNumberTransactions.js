/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let [maxProfit, l] = [0, prices.length];
    if(l === 1)
        return maxProfit;
    for(let i=0; i<l-1; i++) {
        if(prices[i+1] > prices[i]) {
            maxProfit += prices[i+1] - prices[i];
        }
    }
    return maxProfit;  
};
