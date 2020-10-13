function selectionSort(arr) {
  let minimumIndex = 0;
  let needToSwap = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
        needToSwap = true;
      }
      if (j == arr.length - 1) {
        if (needToSwap) {
          [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
        }
      }
    }
  }
  return arr;
}
function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      return a - b;
    };
  }

  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (comparator(arr[j], arr[minimumIndex]) < 0) minimumIndex = j;
    }
    if (i !== minimumIndex) {
      [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
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
  return a.age - b.age;
}

// selectionSort([2, 4, 1,24,52,12,65, 2, 3, 5, 6, 3],test)
selectionSort(keets, test);
