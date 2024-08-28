// Minha solução (falhou por tempo)
// function maxProfit(prices: number[]): number {
//   let maxProfit = maxProfitForRange(prices);
//   const subsets = getCombinations(prices);
//   for (const subset of subsets) {
//     let nowProfit = 0;
//     for (let i = 0; i < subset.length; i++) {
//       nowProfit += maxProfitForRange(subset[i]);
//     }
//     if (nowProfit > maxProfit) {
//       maxProfit = nowProfit;
//     }
//   }
//   return maxProfit;
// }

// function maxProfitForRange(prices: number[]): number {
//   if (prices.length < 2) return 0;
//   let minPrice = prices[0];
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const potentialProfit = prices[i] - minPrice;
//     if (potentialProfit > maxProfit) maxProfit = potentialProfit;
//     if (prices[i] < minPrice) minPrice = prices[i];
//   }
//   return maxProfit;
// }

// function getCombinations(input: number[]): number[][][] {
//   const result: number[][][] = [];
//   const stack: { startIndex: number; currentCombination: number[][] }[] = [];
//   stack.push({ startIndex: 0, currentCombination: [] });
//   while (stack.length > 0) {
//     const { startIndex, currentCombination } = stack.pop()!;
//     if (startIndex === input.length) {
//       result.push(currentCombination);
//       continue;
//     }
//     for (let endIndex = startIndex + 2; endIndex <= input.length; endIndex++) {
//       const newSubset = input.slice(startIndex, endIndex);
//       stack.push({
//         startIndex: endIndex,
//         currentCombination: [...currentCombination, newSubset],
//       });
//     }
//   }

//   return result;
// }

// Solução correta
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}
