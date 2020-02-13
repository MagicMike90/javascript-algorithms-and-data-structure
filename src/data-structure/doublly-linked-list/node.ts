export class Node {
  value: any;
  next: Node;
  previous: Node;
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString(callback = null) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
