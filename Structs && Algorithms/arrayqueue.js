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
    return this.items[this.items.length - 1];
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
  let queue = new Queue();
  let context = "";
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      if (j === 1) {
        queue.enqueue(1);
        context += "1  ";
        console.log("final", i, j, queue.tail());
      } else if (j === i) {
        queue.dequeue();
        queue.enqueue(1);
        context += "1  ";
        console.log("final", i, j, queue.tail());
      } else {
        first = queue.dequeue();
        last = queue.head();
        final = first + last;
        console.log("final", i, j, first, last, final);
        queue.enqueue(final);
        context += final + "  ";
      }
    }
    context += "\n";
  }
  console.log(context);
  return context;
}

// tringle(7);

// maze_array[2][1] ------- maze_array[3][5]

function mazeFinder(array) {
  var maze_array = [
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
  ];
  var maze_array_bak = maze_array.slice();
  maze_array[array[0]][array[1]] = 98;
  maze_array[array[2]][array[3]] = 99;
  let x = array[0];
  let y = array[1];
  const Stack = require("./mystack");
  let stack = new Stack();
  while (x >= 0 && x <= 6 && y >= 0 && y <= 6) {
    let left = maze_array[x - 1][y];
    let right = maze_array[x - 1][y];
    let top = maze_array[x - 1][y];
    let bottom = maze_array[x - 1][y];
    if (left !== 1) {
      stack.push(left);
    }
  }
}
