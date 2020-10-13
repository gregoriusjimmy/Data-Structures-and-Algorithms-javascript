// function bubbleSort(arr) {

//   for (let i = arr.length; i >= 0; i--) {
//     // console.log(i,j)
//     for (let j = 0; j < i - 1; j++) {

//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      return a - b;
    };
  }
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(i, j)
      if (comparator(arr[j], arr[j + 1]) >= 1) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let keets = [
  {
    name: 'awda',
    age: 30,
  },
  {
    name: 'awdawdaw',
    age: 32,
  },
  {
    name: 'wdaawdfaaw',
    age: 10,
  },
  {
    name: 'aa',
    age: 40,
  },
];
function test(a, b) {
  return a - b;
}

bubbleSort(
  [2, 1, 4, 6, 5, 7, 2, 5, 6, 30, 12, 45, 63, 2, 43, 23, 67, 100, 5],
  test
);
// bubbleSort(keets, test)
