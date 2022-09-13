/* Time complexity: 
    Parses entire array in single pass: O(n)
    adding an element to hashmap: O(1) constant time
    reading an element from hashmap: O(1) constant
    Notes: 
    [[Two pointer - Leetcode 121|learning.dsa.leetcode#two-pointer---leetcode-121]]
*/

function twoSum(nums, target) {
    const prevMap = {}
    const result = []
    nums.some((ele, index) => {
        const i = target-ele
        if(prevMap[i] !== undefined) { 
            result.push(index, prevMap[i]) 
            return true
        } else {
            prevMap[ele] = index
        }
    });
    return result
 
}

console.log("two target ---> ", twoSum([3, 1, 5, 2], 4));
