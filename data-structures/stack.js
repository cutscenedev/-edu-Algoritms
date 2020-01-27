class Stack {
  constructor(length = 0) {
    if (length <= 1) {
      throw new Error('empty or single stacks are not allowed')
    }

    this._top = -1
    this._length = length
    this._stack = Object.create(null)
  }

  push(value) {
    if (this._top === this._length) {
      throw new Error('stack overflow prevented')
    }

    this._top += 1
    this._stack[this._top] = value
  }

  pop() {
    if (this.empty) {
      throw new Error('stack underflow prevented')
    }

    this._top -= 1

    return this._stack[this._top + 1]
  }

  get empty() {
    return this._top === -1
  }
}

exports = Stack
