function rotateArray(nums: number[], k: number): void {
  const actualK = k % nums.length;
  const lastIndex = nums.length - 1;
  const copyNums = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let index = lastIndex - actualK - i;
    if (index < 0) {
      index += nums.length;
    }
    copyNums[lastIndex - i] = nums[index];
  }
  nums.length = 0;
  nums.push(...copyNums);
}
