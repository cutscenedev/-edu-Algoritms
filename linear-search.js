
/**
 * complexity (O):
 *   best: 1
 *   worst: n
 *   average: n
 */
const linearSearch = (searchable, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchable) {
      return i
    }
  }

  return null
}
