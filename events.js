const eventEmitter = require("node:events");
const emitter = new eventEmitter();
//events are also promise
emitter.on("order-pizza", (num, time) => {
  //you can use conditions her base on the parameter
  console.log(`ordering ${num} pizza by ${time}`); //listener a callback fun called when event is emitted. Other parameter can be passed
});
emitter.emit("order-pizza", 2, "2:30"); // name of event
