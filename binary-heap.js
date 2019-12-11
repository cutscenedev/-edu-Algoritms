
class BinaryHeap {
  constructor(heap) {
    this.heap = heap
  }

  get heapSize() {
    return this.heap.length
  }

  get indexBeforeLeafs() {
    return Math.floor(this.heapSize / 2)
  }

  getLeftIndex(index) {
    return index * 2
  }

  getRightIndex(index) {
    return (index * 2) + 1
  }

  heapify(index) {
    let largest

    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)

    const leftInRange = left <= this.heapSize
    const leftIsBigger = leftInRange && this.heap[left] > this.heap[index]

    if (leftIsBigger) {
      largest = left
    } else {
      largest = index
    }

    const rightInRange = right <= this.heapSize
    const rightIsBigger = rightInRange && this.heap[right] > this.heap[largest]

    if (rightIsBigger) {
      largest = right
    }

    if (largest !== index) {
      const tempLargest = this.heap[largest]

      this.heap[largest] = this.heap[index]
      this.heap[index] = tempLargest

      this.heapify(largest)
    }
  }

  buildHeap() {
    for (let i = this.indexBeforeLeafs; i >= 0; i--) {
      this.heapify(i)
    }
  }
}
