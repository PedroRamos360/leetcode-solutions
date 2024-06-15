function getIndexesOfRepeated(repeated: number, nums: number[]) {
  const copyNums: (string | number)[] = [...nums];
  const indexOfRepeateds: number[] = [];
  for (const num of nums) {
    if (num === repeated) {
      indexOfRepeateds.push(copyNums.indexOf(num));
      copyNums[copyNums.indexOf(num)] = "c";
    }
  }
  return indexOfRepeateds;
}

function isListUnique(nums: number[]) {
  const unique = [...new Set(nums)];
  if (unique.length != nums.length) return false;
  return true;
}

function minIncrementForUnique(nums: number[]): number {
  let moves = 0;
  let i = 0;
  while (!isListUnique(nums)) {
    const indexes = getIndexesOfRepeated(i, nums);
    for (let j = 1; j < indexes.length; j++) {
      nums[indexes[j]]++;
      moves++;
    }
    i++;
  }
  return moves;
}
