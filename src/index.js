class Sorter {
  constructor() {
    this.sorter = [];
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sortFunction(right, left) {
    return right - left;
  }

  sort(indices) {
    let arr = [];

    for (let i = 0; i < indices.length; i++) {
      arr.push(this.sorter[indices[i]]);
    }

    indices.sort((right, left) => right - left);

    arr.sort(this.sortFunction);

    for (let i = 0; i < arr.length; i++) {
      this.sorter.splice(indices[i], 1, arr[i]);
    }

    return this.sorter;
  }

  setComparator(compareFunction) {
    Sorter.prototype.sortFunction = compareFunction;
  }
}

module.exports = Sorter;