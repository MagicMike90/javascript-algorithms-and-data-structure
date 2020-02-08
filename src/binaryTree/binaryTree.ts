import { Node } from './node';

export class BinaryTree<T> {
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
  public insert(value: T) {
    const newNode = new Node(value);

    // if there is no root value yet
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNodeLoop(newNode);
    }
  }
  public insertNodeLoop(newNode: Node<T>) {
    // loop traverse until
    let currentNode = this.root;
    while (true) {
      if (currentNode.value > newNode.value) {
        // let's increment if it's not a null and insert if it is a null
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else if (currentNode.value < newNode.value) {
        // if bigger than current, put it on the right
        // let's increment if it's not a null and insert if it is a null
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      } else {
        // case that both are the same
        break;
      }
    }
  }
  public insertNodeRecur(node: Node<T>, newNode: Node<T>) {
    // if the value is less than the node
    // value move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      else this.insertNodeRecur(node.left, newNode);
    }

    // if the value is more than the node
    // value move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      else this.insertNodeRecur(node.right, newNode);
    }
  }
  size(node: Node<T>) {
    if (node == null) {
      return 0;
    }

    return this.size(node.left) + 1 + this.size(node.right);
  }

  search(value: T): Node<T> {
    let current = this.root;

    while (current.value !== value) {
      if (current) {
        if (current.value > value) {
          current = current.left;
        } else {
          current = current.right;
        }

        //not found
        if (current === null) {
          return null;
        }
      }
    }

    return current;
  }
  //Searches for a node with a minimum value starting from node
  // In binary tree, minimum node is always in the left branch
  findMinNode(node: Node<T>) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  remove(value: T) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node: Node<T>, value: T) {
    // if the root is null then tree is
    // empty
    if (node === null) return null;
    // if value to be delete is less than
    // roots value then move to left subtree
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }

    // if value to be delete is greater than
    // roots value then move to right subtree
    else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    }

    // if value is similar to the root's value
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      const aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  inOrderTraverse(node: Node<T>) {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }

  preOrderTraverse(node: Node<T>) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }
  postOrderTraverse(node: Node<T>) {
    if (node !== null) {
      this.postOrderTraverse(node.left);
      this.postOrderTraverse(node.right);
      console.log(node.value);
    }
  }
}
