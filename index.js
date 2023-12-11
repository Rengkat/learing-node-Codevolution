// const sum = require("./localModule/add");
// const caching = require("./caching");
// now the is going to be
const SuperHero = require("./caching");
const data = require("./data.json"); // always add the extension in json even though i will work without it
const shopPizza = require("./eventExtends");
const superHero = new SuperHero("Alexander");
// console.log(superHero.getName());
// superHero.setName("Alex");
// console.log(superHero.getName());
// console.log(data);
const pizza = new shopPizza();
pizza.order();
console.log(pizza.displayOrderNum());
