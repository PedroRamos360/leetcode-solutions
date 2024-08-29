function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let indexToJump = nums[0];
  let nowPos = 0;
  while (true) {
    let nextIndexToJump = -1;
    for (let i = nowPos + 1; i <= indexToJump; i++) {
      const jumpPos = nums[i] + i;
      if (jumpPos >= nums.length - 1) return true;
      if (jumpPos > nextIndexToJump) nextIndexToJump = jumpPos;
    }
    if (nextIndexToJump <= indexToJump) return false;
    indexToJump = nextIndexToJump;
    nowPos = indexToJump;
  }
}
