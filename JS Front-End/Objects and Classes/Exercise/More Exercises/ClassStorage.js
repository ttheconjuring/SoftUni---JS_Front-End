class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0;
  }

  getSum() {
    let sum = 0;
    for (const product of this.storage) {
      const price = Number(product.price);
      const quantity = Number(product.quantity);
      const total = price * quantity;
      sum += total;
    }
    return sum;
  }

  addProduct(product) {
    if (this.capacity > 0) {
      this.storage.push(product);
      this.totalCost = this.getSum();
      this.capacity = this.capacity - product.quantity;
    }
  }

  getProducts() {
    let result = [];
    this.storage.forEach((product) => result.push(JSON.stringify(product)));
    return result.join("\n");
  }
}


