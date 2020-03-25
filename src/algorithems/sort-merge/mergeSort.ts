export class MergeSort {
  merge(left: number[], right: number[]): number[] {
    const arr: number[] = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];
      if (lItem == null) {
        arr.push(rItem);
        rIndex++;
      } else if (rItem == null) {
        arr.push(lItem);
        lIndex++;
      } else if (lItem < rItem) {
        arr.push(lItem);
        lIndex++;
      } else {
        arr.push(rItem);
        rIndex++;
      }
    }
    return arr;
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
