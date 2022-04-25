/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // [7,1,5,3,6,4]
    if(prices.length <= 1) return 0;
    let [maxProfit, minP] = [0, prices[0]];
    for(let i=1; i<prices.length;  i++) { // i=1,2,3,
        const price = prices[i]; // 5,3,6,4
        maxProfit =  Math.max(maxProfit, price - minP); // 0,4,5,
        minP = Math.min(price, minP); // 1,    
    }
    return maxProfit;
};
