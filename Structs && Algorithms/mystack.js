function Stack() {
  var items = [];
  this.push = function (item) {
    items.push(item);
  };
  this.pop = function (item) {
    if (items.length !== 0) {
      return items.pop();
    } else {
      return "error";
    }
  };
  this.top = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.clear = function () {
    items = [];
  };
}

function is_leagl_brackets(string) {
  var stack = new Stack();
  for (let i = 0; i < string.length - 1; i++) {
    var item = string[i];
    if (item === "(") {
      stack.push(item);
      console.log("stack", i, item, stack.top());
    } else if (item === ")") {
      if (stack.isEmpty()) {
        console.log("error");
        return false;
      } else {
        let poperror = stack.pop();
        console.log("stack pop", i, item, poperror);
      }
    }
  }
  return stack.isEmpty();
}

function cal(arr) {
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    if (["+", "-", "*", "/"].indexOf(arr[i]) >= 0) {
      let a = stack.pop();
      let b = stack.pop();
      let ret = parseInt(eval(b + arr[i] + a));
      console.log(b, arr[i], a, ret);
      stack.push(ret.toString());
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.pop();
}

// console.log(is_leagl_brackets("()sdsdfsfs"));
// console.log(is_leagl_brackets("()()sdsdf(sdfsdf(sdfsdf)sdf()(sfs)"));
// console.log(cal(["4", "13", "5", "/", "+"]));
// 4 + 13 / 5;

function cal1(arr) {
  let stack = new Stack();
  var postfix_lst = [];
  priority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!isNaN(item)) {
      postfix_lst.push(item);
    } else if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      while (stack.top() !== "(") {
        postfix_lst.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        !stack.isEmpty() &&
        ["+", "-", "*", "/"].indexOf(item) >= 0 &&
        priority[stack.top()] >= priority[item]
      ) {
        postfix_lst.push(stack.pop());
      }
      stack.push(item);
    }
  }
  while (!stack.isEmpty()) {
    postfix_lst.push(stack.pop());
  }
  return postfix_lst;
}
// console.log(cal1(["4", "+", "13", "/", "5"]));
console.log(cal1(["(", "4", "+", "13", ")", "/", "5"]));
