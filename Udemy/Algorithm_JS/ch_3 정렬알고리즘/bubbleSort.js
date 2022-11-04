function bubbleSort(array) {
  for (let i = array.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      console.log(array);
    }
    console.log("loop end!");
  }
}
bubbleSort([10, 12, 13, 50, 20, 8, 6, 32, 1]);
