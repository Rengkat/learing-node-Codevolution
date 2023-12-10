// now import them as object
import math from "./add.mjs";
//destructure
// console.log(math.add(1, 5));
// console.log(math.sub(5, 3));
const { add, sub } = math;
console.log(math.add(1, 5));
console.log(math.sub(5, 3));
