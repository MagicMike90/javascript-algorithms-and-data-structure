import { BinaryTree } from './binaryTree';

describe('linked list', () => {
  const binaryTree = new BinaryTree<number>();

  it('should created an empty tree', () => {
    expect(binaryTree.isEmpty()).toBe(true);
  });

  it('should insert a node in root', () => {
    binaryTree.insert(20);
    expect(binaryTree.isEmpty()).toBe(false);
    expect(binaryTree.rootNode().value).toBe(20);
  });

  it('should insert a lesser number to the left', () => {
    binaryTree.insert(10);
    const rootNode = binaryTree.rootNode();
    expect(rootNode.left).toBeTruthy();
    expect(rootNode.left.value).toBe(10);
  });

  it('should insert a greater number to the left', () => {
    binaryTree.insert(30);
    const rootNode = binaryTree.rootNode();
    expect(rootNode.right).toBeTruthy();
    expect(rootNode.right.value).toBe(30);
  });

  it('should find the node', () => {
    binaryTree.insert(1);
    binaryTree.insert(5);
    binaryTree.insert(40);
    binaryTree.insert(50);

    const node = binaryTree.search(50);
    expect(node).toBeDefined();
  });

  it('should return size of 7', () => {
    const rootNode = binaryTree.rootNode();
    expect(binaryTree.size(rootNode)).toBe(7);
  });

  it('should not find the node', () => {
    const node = binaryTree.search(55);
    expect(node).toBeNull();
  });

  it('should find the minium node', () => {
    const node = binaryTree.search(20);
    const mNode = binaryTree.findMinNode(node);
    expect(mNode.value).toBe(1);
  });

  it('should delete the correct node', () => {
    const rootNode = binaryTree.rootNode();
    expect(rootNode.value).toBe(20);

    binaryTree.remove(20);
    expect(rootNode.value).toBe(30);
    expect(binaryTree.size(rootNode)).toBe(6);
  });
});
