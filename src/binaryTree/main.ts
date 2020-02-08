import { BinaryTree } from './binaryTree';

const tree = new BinaryTree<number>();
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

const rootNode = tree.rootNode();
console.log('Root node is :', rootNode.value);
console.log('Performing in order traversal');
tree.inOrderTraverse(rootNode);
console.log('Performing in pre order traversal');
tree.preOrderTraverse(rootNode);
console.log('Performing in post order traversal');
tree.postOrderTraverse(rootNode);
