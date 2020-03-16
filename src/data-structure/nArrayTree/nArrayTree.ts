export class Node<T> {
  public data: T | null;
  public children: Array<Node<T>>;
  public parent: T;
  public constructor(value: T | null = null) {
    this.data = value;
    this.parent = null;
    this.children = [];
  }
}
export enum DfsOrder {
  preOrder = '_preOrder',
  postOrder = '_postOrder'
}

export type traverseCallback<T> = (err: Error, val: Node<T>) => void;

export class NArrayTree<T> {
  private root: Node<T>;

  constructor() {
    this.root = null;
  }
  public rootNode(): Node<T> {
    return this.root;
  }
  isEmpty() {
    return this.root === null;
  }
  public add(value: T, toNodeData: T = null) {
    const newNode = new Node(value);

    // if there is no root value yet
    if (!this.root) {
      this.root = newNode;
    } else {
      const parent = toNodeData ? this.findBFS(toNodeData) : null;
      if (parent) {
        newNode.parent = toNodeData;
        parent.children.push(newNode);
      } else {
        throw new Error('Cannot find parent node');
      }
    }
  }

  remove(data: T) {
    if (this.root.data === data) {
      this.root = null;
    }

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].data === data) {
          node.children.splice(i, 1);
        } else {
          queue.push(node.children[i]);
        }
      }
    }
  }
  contains(data: T) {
    return this.findBFS(data) ? true : false;
  }
  findBFS(data: T): Node<T> | null {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      // if find the node
      if (node.data === data) {
        return node;
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    return null;
  }

  _preOrder(node: Node<T>, callback: traverseCallback<T>) {
    if (node) {
      if (callback) {
        callback(null, node);
      }
      for (let i = 0; i < node.children.length; i++) {
        this._preOrder(node.children[i], callback);
      }
    }
  }
  _postOrder(node: Node<T>, callback: traverseCallback<T>) {
    if (node) {
      for (let i = 0; i < node.children.length; i++) {
        this._postOrder(node.children[i], callback);
      }
      if (callback) {
        callback(null, node);
      }
    }
  }
  traverseDFS(callback: traverseCallback<T>, method: DfsOrder = DfsOrder.preOrder) {
    const current = this.root;
    this[method](current, callback);
  }
  traverseBFS(callback: traverseCallback<T>) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (callback) {
        callback(null, node);
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  }
  print() {
    if (!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let output = '';
    while (queue.length) {
      const node = queue.shift();

      for (const child of node.children) {
        queue.push(child);
      }
      if (!queue.length) break;

      output += node.data.toString() + ' ';

      // if there is more thing to be output
      if (node === newline && queue.length) {
        queue.push(newline);
      }
    }
    console.log(output.trim());
    return output.trim();
  }
  printByLevel() {
    if (!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('\n');
    const queue = [this.root, newline];
    let output = '';
    while (queue.length) {
      const node = queue.shift();
      output += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    console.log(output.trim());
  }
}
