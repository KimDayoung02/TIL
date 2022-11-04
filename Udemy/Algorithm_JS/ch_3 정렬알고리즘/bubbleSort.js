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
// bubbleSort([10, 12, 13, 50, 20, 8, 6, 32, 1]);

//정렬이 거의 다 됐을 경우 쓸데없는 반복은 피하기 위해 noSwap을 추가
function bubbleSortWithNoSwap(array) {
  let noSwap;
  for (let i = array.length; i > 1; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwap = false;
      }
      console.log(array);
    }
    console.log("loop end!");
    if (noSwap) break;
  }
}
bubbleSortWithNoSwap([1, 2, 3, 4, 5, 8, 6, 7]);
