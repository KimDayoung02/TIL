function swap(arr, a, b) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function quickSort(arr, first, last) {
  let pivot = first;

  if (first >= last) return arr;
  for (let i = first; i <= last; i++) {
    if (arr[first] > arr[i]) {
      pivot++;
      swap(arr, i, pivot);
      //   console.log(arr, first, last);
    }
  }
  swap(arr, first, pivot);

  quickSort(arr, first, pivot - 1);
  quickSort(arr, pivot + 1, arr.length - 1);
  return arr;
}

let array = [
  50, 12, 6, 235, 9, 5, 6, 754, 32, 5, 62, 4, 8, 15, 51, 15, 15, 478, 6, 5, 23,
  54, 21, 563, 321, 5, 4, 85, 69, 5, 6, 778, 12,
];

console.time("Performance Time"); // 시작시간
quickSort(array, 0, array.length - 1);
console.timeEnd("Performance Time"); // 해당 부분에서 콘솔로 값을 리턴 받는다.

console.log(array);
