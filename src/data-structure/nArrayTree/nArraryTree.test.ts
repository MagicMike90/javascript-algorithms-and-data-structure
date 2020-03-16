import { NArrayTree } from './nArrayTree';

describe('linked list', () => {
  const tree = new NArrayTree<string>();

  it('should created an empty tree', () => {
    expect(tree.isEmpty()).toBe(true);
  });

  it('should created an empty tree', () => {
    tree.add('ceo');
    tree.add('cto', 'ceo');
    tree.add('dev1', 'cto');
    tree.add('dev2', 'cto');
    tree.add('dev3', 'cto');
    tree.add('cfo', 'ceo');
    tree.add('accountant', 'cfo');
    tree.add('cmo', 'ceo');

    const result = tree.print();
    expect(result).toBe('ceo | cto cfo cmo | dev1 dev2 dev3 accountant');
  });
});
