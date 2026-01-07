//arr1 and arr2 are sorted arrays, return a merged sorted array
function mergeSortedArrays(arr1, arr2) {
  const len1 = arr1.length; //O(1) space
  const len2 = arr2.length; //O(1) space
  // check input
  if (len1 === 0 && len2 === 0) return "error";
  // boundary conds
  if (len1 === 0) return arr2;
  if (len2 === 0) return arr1;

  let i = 0;
  let j = 0;
  const mergedArr = []; // //In the worst case, it stores all elements from both arrays: O(n+m) space
  while (i < len1 && j < len2) {
    // O(n+m) times
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  //Only one of these 2 if runs
  if (i < len1) {
    for (i; i < len1; i++) mergedArr.push(arr1[i]); // O(n) time
  }
  if (j < len2) {
    for (j; j < len2; j++) mergedArr.push(arr2[j]); // O(m) time
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 4, 7], [2, 6, 8]));

// Total time and space complexity: O(n+m)

// cleaner JS way, but its time complexity is not the same.
const mergeSortedArrays2 = (arr1, arr2) => arr1.concat(arr2).sort();
console.log(mergeSortedArrays2([0, 4, 7], [2, 6, 8]));

