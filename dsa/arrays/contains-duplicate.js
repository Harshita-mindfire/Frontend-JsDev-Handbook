// O(n) space O(n): unique = Set
function containsDuplicate(nums) {
  const memory = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (memory.has(nums[i])) {
      return true;
    } else {
      memory.add(nums[i], true);
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));

// onliner

function containsDuplicateOneLiner(nums) {
  return new Set(nums).size !== nums.length;
}

// In O(1) space

// first sort and then compare neighbour

function containsDuplicateWithSort(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) return true;
  }
  return false;
}

console.log(containsDuplicateWithSort([1, 2, 3, 1]));

