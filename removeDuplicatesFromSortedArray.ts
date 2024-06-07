function removeDuplicates(nums: number[]): number {
  let index = 0;
  for (const num of nums) {
    if (!nums.slice(0, index).includes(num)) {
      nums[index] = num;
      index++;
    }
  }
  nums.length = index;
  return index;
}
