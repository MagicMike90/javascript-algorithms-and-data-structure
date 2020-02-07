import { Node } from './node';

export class BinaryTree<T> {
  private root: Node<T>;

  public insert(value: T) {
    const newNode = {
      left: null,
      right: null,
      value
    };
    // if there is no root value yet
    if (!this.root) {
      this.root = newNode;
    } else {
      // loop traverse until
      let currentRoot = this.root;
      while (true) {
        if (currentRoot.value > value) {
          // let's increment if it's not a null and insert if it is a null
          if (currentRoot.left !== null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = newNode;
            break;
          }
        } else if (currentRoot.value < value) {
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
  }
}
