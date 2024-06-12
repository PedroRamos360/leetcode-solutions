function maxProfit(prices: number[]): number {
  let max = -Infinity;
  const maxElement = Math.max(...prices);
  const minElement = Math.min(...prices);
  if (prices.indexOf(maxElement) > prices.indexOf(minElement)) {
    return maxElement - minElement;
  }
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const value = prices[j] - prices[i];
      if (value > max) {
        max = value;
      }
    }
  }
  if (max < 0) return 0;
  return max;
}
