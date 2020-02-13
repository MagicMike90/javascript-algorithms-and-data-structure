import { Node } from './node';

export class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();
    this.head.next = this.tail;
  }

  public isEmpty(): boolean {
    return this.head.next === this.tail;
  }

  public insert(item: T): void {
    // Encapsulate our item into a Node object
    const newNode = new Node<T>(item);

    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  public insertLast(item: T): void {
    const newNode = new Node<T>(item);

    let cur: Node<T> | null = this.head;

    // Advance our cur pointer to just before the tail node
    while (cur && cur.next !== this.tail) {
      cur = cur.next;
    }

    if (cur) {
      newNode.next = this.tail;
      cur.next = newNode;
    }
  }

  public removeFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    const rv: Node<T> | null = this.head.next;

    if (rv) {
      this.head.next = rv.next;
      rv.next = null;
    }

    // We are returning the data, not the node itself
    return rv ? rv.item : null;
  }

  public remove(searchKey: T): T | null {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    let rv: Node<T> | null = null;

    // cur = current
    let cur: Node<T> = this.head;

    // Advance our cur pointer to the node right before our matching node
    while (cur.next && cur.next.item !== searchKey) {
      cur = cur.next;
    }

    if (cur.next) {
      rv = cur.next;
      cur.next = cur.next.next;
      rv.next = null;
    }

    return rv && rv.item ? rv.item : null;
  }

  public contains(searchItem: T): boolean {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    let rv = false;
    let cur: Node<T> | null = this.head;

    // Traverse the list in search of a matching item
    while (cur && cur.next !== this.tail) {
      if (cur.next && cur.next.item === searchItem) {
        rv = true;
        break;
      }
      cur = cur.next;
    }

    return rv;
  }

  public getFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    return this.head.next ? this.head.next.item : null;
  }

  public listContents(): void {
    let cur = this.head.next;

    while (cur && cur !== this.tail) {
      console.log(`${cur.item}`);
      cur = cur.next;
    }
  }

  public toArray = (): T[] => {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.item);
      node = node.next;
    }
    return result;
  };
}
