class Queue {
  constructor(length = 0) {
    if (length === 0) {
      throw new Error('empty queues are not allowed')
    }

    this.head = 0
    this.tail = 0
    this.length = length
    this.queue = Object.create(null)
  }

  enqueue(value) {
    if (this.tail === -1) {
      throw new Error('queue overflow prevented')
    }

    this.queue[this.tail] = value

    if (this.tail === this.length - 1) {
      this.tail = -1
    } else {
      this.tail += 1
    }

  }

  dequeue() {
    if (this.head === -1) {
      throw new Error('queue underflow prevented')
    }

    const value = this.queue[this.head]

    if (this.head === this.length) {
      this.head = -1
    } else {
      this.head += 1
    }

    return value
  }

  get empty() {
    return this.head === this.tail
  }
}

exports = Queue

const queue = new Queue(12)

console.info(queue)

queue.enqueue('dick')
queue.enqueue('pick')
queue.dequeue()

console.info(queue)

// console.info(stack.empty)
// console.info(stack.top)

// stack.push('dick')
// console.info(stack.empty)
// console.info(stack.top)

// stack.pop()
// console.info(stack.empty)
// console.info(stack.top)
// stack.pop()
