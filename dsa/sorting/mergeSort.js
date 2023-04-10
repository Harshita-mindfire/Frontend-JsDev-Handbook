function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  const mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    mergedArray.push(...arr1.slice(i));
  }
  if (j < arr2.length) {
    mergedArray.push(...arr2.slice(j));
  }
  return mergedArray;
}

function mergeSort(arr) {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }
  const mid = length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);
  const arr1 = mergeSort(left);
  const arr2 = mergeSort(right);
  const mergedArray = merge(arr1, arr2);
  return mergedArray;
}
const array = [12, -11, 13, -5, 6, 7];
const sortedArray = mergeSort(array);
console.log("sortedArray------>", sortedArray);
