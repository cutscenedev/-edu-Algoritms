
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

const selectionSort = (unsorted) => {
  const searchedUnsortedIndexes = [] // c1*0

  for (let i = 0; i < unsorted.length; i++) { // c2*(n + 1)
    let smallestIndex // c3*0

    for (let j = 0; j < unsorted.length; j++) { // c4*E[0, n](2^(i + 1))
      if (!searchedUnsortedIndexes.includes(j)) { // c5*E[0, n](2^i)
        if (typeof smallestIndex === 'undefined') { // c6*(E[0, n](2^i) - n/2)
          smallestIndex = j // c7*0
        } else {
          if (unsorted[j] <= unsorted[smallestIndex]) { // c8*((E[0, n](2^i) - n/2) - ???)
            smallestIndex = j // c9*0
          }
        }
      }
    }

    searchedUnsortedIndexes.push(smallestIndex) // c10*n
  }

  const sorted = searchedUnsortedIndexes.map(i => unsorted[i]) // c11*n

  return sorted
}

// Complexity by time (worst-case running time) = c1*0 + c2*(n+1) + c3*0 + c4*E[0, n](2^(i + 1)) + c5*E[0, n](2^i)
//   + c6*(E[0, n](2^i) - n/2) + c7*0 + c8*((E[0, n](2^i) - n/2) - ???) + c9*0 + c10*n + c11*n
//   ~= an^2 + bn + c
//   ~= O(n^2)

// Complexity by time (best-case running time) = Complexity by time (worst-case running time)

