export class Node<T> {
  public data: T | null;
  public children: Array<Node<T>>;
  public parent: Node<T>;
  public level: number;
  public constructor(value: T | null = null) {
    this.data = value;
    this.level = null;
  }
}

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

  _preOrder = function(node, fn) {
    if (node) {
      if (fn) {
        fn(node);
      }
      for (let i = 0; i < node.children.length; i++) {
        this._preOrder(node.children[i], fn);
      }
    }
  };
  _postOrder = function(node, fn) {
    if (node) {
      for (let i = 0; i < node.children.length; i++) {
        this._postOrder(node.children[i], fn);
      }
      if (fn) {
        fn(node);
      }
    }
  };
  traverseDFS = function(fn, method) {
    const current = this.root;
    if (method) {
      this['_' + method](current, fn);
    } else {
      this._preOrder(current, fn);
    }
  };
  traverseBFS = function(fn) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (fn) {
        fn(node);
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  };
  print = function() {
    if (!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = '';
    while (queue.length) {
      const node = queue.shift();
      string += node.data.toString() + ' ';
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    console.log(string.slice(0, -2).trim());
  };
  printByLevel = function() {
    if (!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('\n');
    const queue = [this.root, newline];
    let string = '';
    while (queue.length) {
      const node = queue.shift();
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    console.log(string.trim());
  };
}
