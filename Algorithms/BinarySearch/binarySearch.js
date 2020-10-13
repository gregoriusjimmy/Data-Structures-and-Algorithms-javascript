function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    console.log(left, right, middle);
    if (target == arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
// function binarySearch(arr,target){
//   let left = 0
//   let right = arr.length-1

//   while(left < right){
//     let middle = Math.floor((left + right) / 2)
//     console.log(left,right,middle)
//     if(target > arr[middle]){
//       left = middle + 1
//     }else if(target < arr[middle]){
//       right = middle -1
//     }else{
//     return middle
//     }
//   }
//   return -1
// }
binarySearch([1, 2, 3, 4, 5], 2);
