class Queue {
  constructor(items) {
    this.items = [];
  }
  enqueue = function (item) {
    this.items.push(item);
  };
  dequeue = function () {
    return this.items.shift();
  };
  head = function () {
    return this.items[0];
  };
  tail = function () {
    return this.items[items.length - 1];
  };
  size = function () {
    return this.items.length;
  };
  clear = function () {
    this.items = [];
  };
  isEmpty = function () {
    return this.items.length === 0;
  };
}

let nums = [];
for (let i = 0; i < 100; i++) {
  nums.push(i);
}
function del_ring(nums) {
  let queue = new Queue();

  for (let i = 0; i < nums.length; i++) {
    queue.enqueue(nums[i]);
  }

  let index = 0;
  while (queue.size() !== 1) {
    let item = queue.dequeue();
    console.log(queue.size());

    index += 1;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.head();
}

function fabonacci(n) {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);
  console.log(queue.size());

  let index = 0;
  while (index < n - 2) {
    let first = queue.dequeue();
    let second = queue.head();
    let final = first + second;
    queue.enqueue(final);
    index++;
  }
  queue.dequeue();

  return queue.head();
}
// let del_ring1 = del_ring(nums);
// console.log(del_ring1);
// console.log(fabonacci(50));

// console.log(nums);

function tringle(n) {
  let line = 2;
  let queue = new Queue();
  queue.enqueue(1);
  let context = "1";
}

tringle(5);
