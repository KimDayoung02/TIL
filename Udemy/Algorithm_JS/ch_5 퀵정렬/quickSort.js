function quickSort(arr, first, last) {
  let pivot = first;
  let temp;
  if (first >= last) return arr;
  for (let i = first; i <= last; i++) {
    if (arr[first] > arr[i]) {
      pivot++;
      temp = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = temp;
      //   console.log(arr, first, last);
    }
  }
  temp = arr[first];
  arr[first] = arr[pivot];
  arr[pivot] = temp;

  quickSort(arr, first, pivot - 1);
  quickSort(arr, pivot + 1, arr.length - 1);
  return arr;
}

let array = [50, 12, 6, 235, 9, 5, 6, 754, 32, 5, 62, 4, 8, 15];
quickSort(array, 0, array.length - 1);

console.log(array);
