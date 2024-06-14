function getIndexesOfRepeated(repeated: number, nums: number[]) {
  const indexOfRepeateds: number[] = [];
  for (const num of nums) {
    if (num === repeated) {
      indexOfRepeateds.push(nums.indexOf(num));
    }
  }
  return indexOfRepeateds;
}

function minIncrementForUnique(nums: number[]): number {
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    const indexes = getIndexesOfRepeated(i, nums);
    for (let j = 1; j < indexes.length; j++) {
      nums[indexes[j]]++;
      moves++;
    }
    console.log(nums, moves);
  }
  return moves;
}
