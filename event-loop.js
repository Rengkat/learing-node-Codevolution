//in the following order
// 1. microtask queue -> i. nextTick, ii. Promise
// 2. timer queue e.g setTimeout, setTimeInterval
// 3. i/o queue e.g fs module
// 4. check queue e.g setImmidiate
// 5. close queue
//! all the queue aside the micro task, are handled by the libvu thread pool
setTimeout(() => {
  process.nextTick(() => console.log("nextTick in timeout"));
  console.log("timeout 1");
  Promise.resolve().then(() => console.log("promise in set time out"));
}, 100);
Promise.resolve().then(() => console.log("promise 1"));
Promise.resolve().then(() => console.log("promise 2"));
Promise.resolve().then(() => console.log("promise 3"));

process.nextTick(() => console.log("nextTick 1"));
process.nextTick(() => console.log("nextTick 2"));
process.nextTick(() => console.log("nextTick 3"));
//never use the nextTick cos it will always take presidence and it will sterve the promise que and will never run
