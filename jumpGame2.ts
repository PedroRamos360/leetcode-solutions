function jump(nums: number[]): number {
  let jumps = 0;
  let farthest = 0;
  let currentEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) {
      jumps++;
      break;
    }
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  return jumps;
}
