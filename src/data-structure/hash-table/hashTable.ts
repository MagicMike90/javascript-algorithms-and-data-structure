export class HashTable {
  table: number[];
  values: number[];
  constructor() {
    this.table = new Array(137);
    this.values = [];
  }

  /**
   * convert key string to hash number
   * @param key
   */
  hash(key: string) {
    const H = 37;
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += H * total + key.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return total;
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}
