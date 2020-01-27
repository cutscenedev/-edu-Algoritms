
/**
 * complexity (O):
 *   best: 1
 *   worst: log(n)
 *   average: log(n)
 */
const binarySearch = (
  arr,
  element,
  startIndex = 0,
  endIndex = arr.length - 1,
) => {
  const separationIndex = Math.floor((endIndex + startIndex) / 2)

  if (element < arr[separationIndex]) {
    return binarySearch(arr, element, startIndex, separationIndex - 1)
  } else if (element > arr[separationIndex]) {
    return binarySearch(arr, element, separationIndex + 1, endIndex)
  } else {
    return separationIndex
  }
}

exports = binarySearch
