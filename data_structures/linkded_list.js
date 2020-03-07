class LinkedList {
  constructor(length = 0) {
    if (length <= 1) {
      throw new Error('empty or single linked lists are not allowed')
    }

    this._length = length
    this._linkedList = Object.create(null)
  }

  set head(element) {
    this._linkedList.unshift(element)
  }

  get head() {
    return this._linkedList[0]
  }

  search(key) {
    let element = this._linkedList.head

    while (element && element.key !== key) {
      element = element.next
    }

    return element
  }

  insert(key) {
    const element = {
      prev: null,
      key,
      next: this._linkedList.head,
    }

    if (this._linkedList.head) {
      this._linkedList.head.prev = element
    }

    this.head = element

    return element
  }

  delete(element) {
    if (element.prev) {
      element.prev.next = element.next
    } else {
      this._linkedList.head = element.next
    }

    if (element.next) {
      element.next.prev = element.prev
    }
  }
}
