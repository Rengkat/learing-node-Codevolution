//extending the emitter by building our own module
const evenEmitter = require("node:event");
class PizzaShop extends evenEmitter {
  constructor() {
    super();
    this.orderNum = 0;
  }
  order() {
    this.orderNum++;
  }
  displayOrderNum() {
    console.log(`Ordering ${this.displayOrderNum} pizza`);
  }
}
module.exports = PizzaShop;
