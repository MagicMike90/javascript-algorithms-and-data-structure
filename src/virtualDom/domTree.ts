export class Node {
  parent: Node;
  tagName: string;
  value: any;
  children: [];

  constructor(tagName, value, children) {
    this.tagName = tagName;
    this.value = value;
    this.children = children;
  }
}
export class DomTree {
  private root: Node;
  createElement(tagName, value, children) {
    const newElement = new Node(tagName, value, children);

    if (!this.root) {
      this.root = newElement;
    }
  }

  traverse() {}
}
