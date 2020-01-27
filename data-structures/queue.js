class Queue {
  constructor(length = 0) {
    if (length <= 1) {
      throw new Error('empty or single queues are not allowed')
    }

    this._head = 0
    this._tail = 0
    this._length = length
    this._queue = Object.create(null)
  }

  enqueue(value) {
    console.info(this._tail, this._head)
    if (this.full) {
      throw new Error('queue overflow prevented')
    }

    this._queue[this._tail] = value

    if (this._tail === this._length - 1) {
      this._tail = 0
    } else {
      this._tail++
    }
  }

  dequeue() {
    if (this.empty) {
      throw new Error('queue underflow prevented')
    }

    const prevHeadValue = this._queue[this._head]

    if (this._head === this._length - 1) {
      this._head = 0
    } else {
      this._head++
    }

    return prevHeadValue
  }

  get empty() {
    return this._head === this._tail
  }

  get full() {
    return this._tail + 1 === this._head || this._head === 0 && this._tail === this._length - 1
  }
}

exports = Queue

/*
  TODO: solve problem
    1. length = 3
    2. queue.enqueue x3
    3. on 3rd call enqueue throw overflow error, because initial head point to *0* with *null* value
*/
