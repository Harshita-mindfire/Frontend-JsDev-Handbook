function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--;
    }
  }
  return array;
}
const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);
console.log("sortedArray------>", sortedArray);
