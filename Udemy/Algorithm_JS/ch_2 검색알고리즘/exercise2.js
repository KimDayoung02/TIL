/*
exercise.2
Write a function called binarySearch which 
accepts a sorted array and a value and returns the index at which 
the value exists. 
Otherwise, return -1.
 */
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1
function binarySearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mark;
  while (left <= right) {
    mark = parseInt((left + right) / 2);
    if (arr[mark] === target) return mark;
    if (arr[mark] < target) left = mark + 1;
    if (arr[mark] > target) right = mark - 1;
  }
  return -1;
}
let solve = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1
console.log(solve);
