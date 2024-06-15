function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const potentialProfit = prices[i] - minPrice;
    if (potentialProfit > maxProfit) maxProfit = potentialProfit;
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  return maxProfit;
}
