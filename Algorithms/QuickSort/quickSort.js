// function pivot(arr) {

//   let pivotIndex = 0
//   let swapIndex = 0

//   function swap(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//   }

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[pivotIndex]) {
//       swapIndex++
//       swap(arr,i,swapIndex)
//       console.log(swapIndex,arr)
//     }
//   }
//   swap(arr,pivotIndex,swapIndex)
//   console.log(arr)
//   return swapIndex
// }
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
// pivot([5, 1, 28, 4, 3, 6])
quickSort([100, -3, 5, 1, 28, 4, 3, 6]);
// [5,1,28,4,3,6]
// [5,1,28,4,3,6]
