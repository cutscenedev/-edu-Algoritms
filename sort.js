
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
