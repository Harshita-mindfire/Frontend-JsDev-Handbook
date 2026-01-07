function movezeros(nums) {
  const len = nums.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) count++;
    else {
      nums[i - count] = nums[i];
    }
  }
  for (let i = 0; i < count; i++) {
    nums[len - 1 - i] = 0;
  }
}

const nums = [0];
movezeros(nums);
console.log(nums);

// Two pointer approach

function moveZerosWith2Pointer(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
}
const nums2 = [0, 0, 0, 1, 0, 3, 12, 16, 0];
moveZerosWith2Pointer(nums2);
console.log(nums2);

