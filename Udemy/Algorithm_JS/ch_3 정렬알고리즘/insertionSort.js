function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let target = arr[i];
    let position = i;

    for (let j = i - 1; j > -1 && target < arr[j]; j--) {
      arr[j + 1] = arr[j];
      position = j;
    }
    arr[position] = target;
  }
  return arr;
}

console.log(
  insertionSort([
    10, 2, 24, 5, 2, 1, 50, 70, 21, 55, 23, 90, 151321, 15165132, 215121,
  ])
);
