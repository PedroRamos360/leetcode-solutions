// Minha solução com binary search
function hIndex(citations: number[]): number {
  let highestHIndex = 0;
  let mid = Math.ceil(citations.length / 2);
  let hIndexToTest = mid;
  while (true) {
    mid = Math.ceil(mid / 2);
    if (isHIndexValid(citations, hIndexToTest)) {
      highestHIndex = hIndexToTest;
      hIndexToTest += mid;
    } else {
      hIndexToTest -= mid;
    }
    if (mid === 1) break;
  }
  if (isHIndexValid(citations, hIndexToTest)) {
    highestHIndex = hIndexToTest;
    hIndexToTest += mid;
  } else {
    hIndexToTest -= mid;
  }
  return highestHIndex;
}

function isHIndexValid(citations: number[], hIndex: number) {
  let validPaperCount = 0;
  for (const citation of citations) {
    if (citation >= hIndex) validPaperCount++;
  }
  if (validPaperCount >= hIndex) return true;
  return false;
}

// Solução GPT
// function hIndex(citations: number[]): number {
//   citations.sort((a, b) => b - a);
//   let h = 0;
//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] >= i + 1) {
//       h = i + 1;
//     } else {
//       break;
//     }
//   }
//   return h;
// }
