function checkSubarraySum(nums: number[], k: number): boolean {
  const remainderMap = new Map<number, number>();
  remainderMap.set(0, -1);
  let cumulativeSum = 0;
  for (let i = 0; i < nums.length; i++) {
    cumulativeSum += nums[i];
    let remainder = cumulativeSum % k;
    if (remainder < 0) {
      remainder += k;
    }
    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder)! > 1) {
        return true;
      }
    } else {
      remainderMap.set(remainder, i);
    }
  }
  return false;
}
