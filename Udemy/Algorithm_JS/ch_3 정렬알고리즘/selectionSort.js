function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      console.log(minIndex, arr);
    }
    if (minIndex == i) {
      console.log("loop end! no swap!");
      continue;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log("loop end! and swap!");
  }
  return arr;
}

let answer = selectionSort([10, 2, 1, 5, 32, 26, 40, 21]);
console.log(answer);
