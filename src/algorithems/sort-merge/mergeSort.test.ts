import { MergeSort } from './mergeSort';

describe('Merge Sort', () => {
  it('it should print right order', () => {
    const mergeSort = new MergeSort();
    let arr = [4, 3, 1, 2];

    let result = mergeSort.sort(arr);
    expect(result).toEqual([1, 2, 3, 4]);

    arr = [4, 3, 5, 7, 1, 2];
    result = mergeSort.sort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 7]);

    arr = [4, 3, 1, 5, 6, 7, 2];
    result = mergeSort.sort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
