const { EventEmitter } = require("events");
const event = new EventEmitter();

event.on("some_event", (num) => {
  console.log("some_event is begin" + num);
  if ((num = 5)) {
    clearInterval(interval);
  }
});
let num = 0;
let interval = setInterval(() => {
  event.emit("some_event", ++num);
}, 1000);
