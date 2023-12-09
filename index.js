// const sum = require("./localModule/add");
// const caching = require("./caching");
// now the is going to be
const SuperHero = require("./caching");
const superHero = new SuperHero("Alexander");
console.log(superHero.getName());
superHero.setName("Alex");
console.log(superHero.getName());
