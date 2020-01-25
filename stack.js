class Stack {
  constructor(length = 0) {
    if (length === 0) {
      throw new Error('empty stacks are not allowed')
    }

    this.top = -1
    this.length = length
    this.stack = Object.create(null)
  }

  push(value) {
    if (this.top === this.length) {
      throw new Error('stack overflow prevented')
    }

    this.top += 1
    this.stack[this.top] = value
  }

  pop() {
    if (this.empty) {
      throw new Error('stack underflow prevented')
    }

    this.top -= 1

    return this.stack[this.top + 1]
  }

  get empty() {
    return this.top === -1
  }
}

exports = Stack

const stack = new Stack(12)
