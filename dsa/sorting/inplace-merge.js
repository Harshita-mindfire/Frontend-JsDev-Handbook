function mergeSort(arr) {
  if (arr.length < 2) return;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  mergeSort(left);
  mergeSort(right);
  let l = 0,
    r = 0;
  while (l < left.length || r < right.length) {
    if (r == right.length || (l < left.length && left[l] <= right[r])) {
      arr[l + r] = left[l++];
    } else arr[l + r] = right[r++];
  }
  console.log(arr);
}

mergeSort([5, 4, 1, 2, 8]);
