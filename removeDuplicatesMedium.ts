function removeDuplicates(nums: number[]): number {
  let index = 0;
  for (const num of nums) {
    const occurences = nums.slice(0, index).reduce((acc, current) => {
      if (current === num) acc += 1;
      return acc;
    }, 0);
    if (occurences < 2) {
      nums[index] = num;
      index++;
    }
  }
  nums.length = index;
  return index;
}
