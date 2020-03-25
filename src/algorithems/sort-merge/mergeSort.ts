export class MergeSort {
  merge(left: number[], right: number[]): number[] {
    const mergedArray: number[] = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];

      // In JavaScript, the only values in JavaScript that loosely equal
      // to null is undefined
      if (lItem == null) {
        mergedArray.push(rItem);
        rIndex++;
      } else if (rItem == null) {
        mergedArray.push(lItem);
        lIndex++;
      } else if (lItem < rItem) {
        // if left item is less then right item, then push it to the merged array
        mergedArray.push(lItem);
        lIndex++;
      } else {
        mergedArray.push(rItem);
        rIndex++;
      }
    }
    return mergedArray;
  }

  sort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    // divide array into 2
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return this.merge(this.sort(left), this.sort(right));
  }
}
