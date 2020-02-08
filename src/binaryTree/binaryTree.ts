import { Node } from './node';

export class BinaryTree<T> {
  private root: Node<T>;

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
    let currentRoot = this.root;
    while (true) {
      if (currentRoot.value > newNode.value) {
        // let's increment if it's not a null and insert if it is a null
        if (currentRoot.left !== null) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = newNode;
          break;
        }
      } else if (currentRoot.value < newNode.value) {
        // if bigger than current, put it on the right
        // let's increment if it's not a null and insert if it is a null
        if (currentRoot.right !== null) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = newNode;
          break;
        }
      } else {
        // case that both are the same
        break;
      }
    }
  }
  public insertNodeRecur(node: Node<T>, newNode: Node<T>) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      else this.insertNodeRecur(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      else this.insertNodeRecur(node.right, newNode);
    }
  }
}
