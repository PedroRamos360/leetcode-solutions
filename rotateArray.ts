function rotateArray(nums: number[], k: number): void {
  const actualK = k % nums.length;
  const lastIndex = nums.length - 1;
  const aux = nums[lastIndex];
  for (let i = 0; i < nums.length; i++) {
    let index = lastIndex - actualK - i;
    if (index < 0) {
      index + nums.length;
    }
    nums[lastIndex - i] = nums[lastIndex - actualK - i];
  }
  nums[lastIndex + actualK] = aux;
}

const nums: number[] = [];
for (let i = 0; i < 1000; i++) {
  nums.push(i);
}
console.time("start");
rotateArray(nums, 54944);
console.timeEnd("start");
