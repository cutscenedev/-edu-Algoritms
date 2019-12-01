
const insertationSorting = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    const current = arr[j]
  
    let i = j - 1
    while (i >= 0 && arr[i] > current) {
      arr[i + 1] = arr[i]
      i -= 1
    }
  
    arr[i + 1] = current
  }
}

const linearSearch = (searchable, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchable) {
      return i
    }
  }

  return null
}

const selectionSort = (unsorted) => {
  const searchedUnsortedIndexes = []

  for (let i = 0; i < unsorted.length; i++) {
    let smallestIndex

    for (let j = 0; j < unsorted.length; j++) {
      if (!searchedUnsortedIndexes.includes(j)) {
        if (typeof smallestIndex === 'undefined') {
          smallestIndex = j
        } else {
          if (unsorted[j] <= unsorted[smallestIndex]) {
            smallestIndex = j
          }
        }
      }
    }

    searchedUnsortedIndexes.push(smallestIndex)
  }

  const sorted = searchedUnsortedIndexes.map(i => unsorted[i])

  return sorted
}

const gornerSchema = (x, list, i = 0) => {
  if (i === list.length - 1) {
    return list[i]
  } else {
    return list[i] + x * c(x, list, i + 1)
  }
}

const mergeSort = (arr, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    const separationIndex = Math.floor((startIndex + endIndex) / 2)
  
    mergeSort(arr, startIndex, separationIndex)
    mergeSort(arr, separationIndex + 1, endIndex)
    merge(arr, startIndex, separationIndex, endIndex)
  }
}

// used in mergeSort
const merge = (arr, startIndex, separationIndex, endIndex) => {
  const left = arr.slice(startIndex, separationIndex + 1)
  const right = arr.slice(separationIndex + 1, endIndex + 1)
  const iterations = left.length + right.length

  for (let i = 0; i < iterations; i++) {
    if (left.length === 0) {
      arr[startIndex + i] = right.shift()

      continue
    }

    if (right.length === 0) {
      arr[startIndex + i] = left.shift()

      continue
    }

    if (left[0] < right[0]) {
      arr[startIndex + i] = left.shift()
    } else {
      arr[startIndex + i] = right.shift()
    }
  }
}
