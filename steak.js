class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return undefined;
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  count() {
    return this.items.length;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(', ');
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Peak steak:", stack.peek());
console.log("deleted from peak:", stack.pop());
console.log("After deleted:", stack.toString());
console.log("count elements:", stack.count());
console.log("size steak:", stack.size());

stack.clear();
console.log("after cleaning:", stack.toString());
