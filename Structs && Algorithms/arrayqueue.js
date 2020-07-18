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
  // maze_array[array[0]][array[1]] = 98;
  // maze_array[array[2]][array[3]] = 99;
  let x = array[0];
  let y = array[1];
  const Stack = require("./mystack");
  let stack = new Stack();
  let maze_array = mazesearch(x, y, 1);
  console.log(maze_array);
}

function mazesearch(x, y, step) {
  var maze_array = [
    [0, 0, -1, 0, 0, 0, 0],
    [0, 0, -1, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0],
    [0, 0, 0, -1, -1, 0, 0],
    [-1, 0, 0, 0, -1, 0, 0],
    [-1, -1, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0, 0],
  ];
  var maze_array_bak = maze_array.slice();
  // console.log(maze_array_bak[x - 1]);
  let left = (right = top = bottom = -1);
  // let left = -1;
  // let right = -1;
  // let top = -1;
  // let bottom = -1;
  if (x - 1 >= 0 && y >= 0) {
    left = maze_array_bak[x - 1][y];
  }
  if (x + 1 >= 0 && y >= 0) {
    right = maze_array_bak[x + 1][y];
  }
  if (x >= 0 && y - 1 >= 0) {
    left = maze_array_bak[x][y - 1];
  }
  if (x >= 0 && y + 1 >= 0) {
    left = maze_array_bak[x][y + 1];
  }
  if (left !== -1 && left !== step) {
    left = step;
    mazesearch(x - 1, y, step + 1);
  } else if (right !== -1 && right !== step) {
    right = step;
    mazesearch(x + 1, y, step + 1);
  } else if (top !== -1 && top !== step) {
    top = step;
    mazesearch(x, y - 1, step + 1);
  } else if (bottom !== -1 && bottom !== step) {
    bottom = step;
    mazesearch(x, y + 1, step + 1);
  }
  console.log("var", left, right, top, bottom);

  return maze_array_bak;
}

mazeFinder([0, 1]);
