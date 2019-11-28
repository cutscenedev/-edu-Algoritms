
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
