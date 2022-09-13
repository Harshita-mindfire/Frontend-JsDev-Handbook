// https://Harshita-mindfire.github.io/Harshita-notes/notes/yyyjeii77vfw4lvvc9qwvdj#sliding-window-best-time-to-buy-and-sell-stock---leetcode-121


function maxProfit(prices) {
    let maxProf = 0;
    let l = 0;
    let r = 1;
    while(r < prices.length) {
       
        // if profitable
        if(prices[l] < prices[r]) {
            //calculate profit
            profit = prices[r]-prices[l]
            maxProf = Math.max(profit, maxProf)

        } else {
            // buy at the least rate
            l = r
        }
        // always increment buy
        r+=1
    }
    return maxProf
};

console.log("Max Profit ->", maxProfit([2,1,2,1,0,1,2]))