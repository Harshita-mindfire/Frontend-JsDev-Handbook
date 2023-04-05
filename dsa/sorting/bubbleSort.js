function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j + 1 < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    console.log(`array in pass ${i}`, array);
  }
  return array;
}

const array = [9, 2, 11, 8, 0, 1]; //2 5 6  3  1 8

const sortedArray = bubbleSort(array);
console.log("bubble sort ---> ", sortedArray);
