// Brute force: O(n^2)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
console.log(twoSum([3, 3], 6));

//Hashmap

function TwoSumWithHashMap(nums, target) {
  const map = new Map(); // Space: O(n)
  for (let i = 0; i < nums.length; i++) {
    // Time O(n)
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
}
console.log(TwoSumWithHashMap([3, 2, 4], 6));

