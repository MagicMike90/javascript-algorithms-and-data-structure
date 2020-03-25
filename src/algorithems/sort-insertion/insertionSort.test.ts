import { insertionSort } from './insertionSort';

describe('Insertion Soft', () => {
  it('it should print right order', () => {
    let result = insertionSort([4, 3, 1, 2]);
    expect(result).toEqual([1, 2, 3, 4]);

    result = insertionSort([4, 3, 5, 7, 1, 2]);
    expect(result).toEqual([1, 2, 3, 4, 5, 7]);

    result = insertionSort([4, 3, 1, 5, 6, 7, 2]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
