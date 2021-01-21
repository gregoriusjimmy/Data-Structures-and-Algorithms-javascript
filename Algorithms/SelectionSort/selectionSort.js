function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(arr, i, lowest)
  }

  return arr
}
function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      return a - b
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j)
      if (comparator(arr[j], arr[minimumIndex]) < 0) minimumIndex = j
    }
    if (i !== minimumIndex) {
      ;[arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]]
    }
  }
  return arr
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
]
function test(a, b) {
  return a.age - b.age
}

// selectionSort([2, 4, 1,24,52,12,65, 2, 3, 5, 6, 3],test)
selectionSort(keets, test)
