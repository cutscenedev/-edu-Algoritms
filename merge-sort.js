
/**
 * complexity (O):
 *   best: n*(log(n))
 *   worst: n*(log(n))
 *   average: n*(log(n))
 */
const mergeSort = (
  arr,
  startIndex = 0,
  endIndex = arr.length - 1,
) => {
  if (startIndex < endIndex) {
    const separationIndex = Math.floor((startIndex + endIndex) / 2)

    mergeSort(arr, startIndex, separationIndex)
    mergeSort(arr, separationIndex + 1, endIndex)
    merge(arr, startIndex, separationIndex, endIndex)
  }
}

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

exports = mergeSort
