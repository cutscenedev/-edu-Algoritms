
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
