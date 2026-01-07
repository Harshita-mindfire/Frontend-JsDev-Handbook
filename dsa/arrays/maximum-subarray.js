/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumSubarray(nums) {
  let maxSum = nums[0];
  //Brute force
  for (let i = 0; i < nums.length; i++) {
    let acc = nums[i];
    if (acc > maxSum) maxSum = acc;
    for (let j = i + 1; j < nums.length; j++) {
      acc = acc + nums[j];
      if (acc > maxSum) maxSum = acc;
    }
  }
  return maxSum;
}

console.log(maximumSubarray([-2]));

/**
 * O(n)+
 * (n-1)(n-2)...1 = n(n-1)/2 = O(n2)
 * Total = O(n2)
 * 🔹 Multiply when the inner loop always runs the same number of times, regardless of the outer loop index.
 * 🔹 Add when the inner loop’s range depends on the outer loop variable.
 */

// Kadane algorithm O(n)

function maximumSubarrayWithKadane(nums) {
  let maxSum = nums[0];
  let highestSumTillNow = nums[0];
  for (let i = 1; i < nums.length; i++) {
    highestSumTillNow = Math.max(nums[i], highestSumTillNow + nums[i]);
    maxSum = Math.max(maxSum, highestSumTillNow);
  }
  return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

