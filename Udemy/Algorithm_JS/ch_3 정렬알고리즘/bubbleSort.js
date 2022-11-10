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
//한번도 교환이 일어나지 않았을 경우 정렬이 모두 되었다고 판단하는 것
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
    }
    if (noSwap) break;
  }
  return array;
}
let arr = [
  50, 12, 6, 235, 9, 5, 6, 754, 32, 5, 62, 4, 8, 15, 51, 15, 15, 478, 6, 5, 23,
  54, 21, 563, 321, 5, 4, 85, 69, 5, 6, 778, 12,
];
console.time("Performance Time"); // 시작시간
bubbleSortWithNoSwap(arr);

console.timeEnd("Performance Time"); // 해당 부분에서 콘솔로 값을 리턴 받는다.

console.log(arr);
