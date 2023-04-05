function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log(`array in pass ${i}`, arr);
  }
  return array;
}
const array = [9, 2, 11, 8, 0, 1];
const sortedArray = selectionSort(array);
console.log("sortedArray------>", sortedArray);
