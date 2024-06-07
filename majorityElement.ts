function majorityElement(nums: number[]): number {
  const numsUnique = [...new Set(nums)];
  for (const unique of numsUnique) {
    if (nums.filter((num) => num == unique).length > nums.length / 2) {
      return unique;
    }
  }
  return numsUnique[0];
}
