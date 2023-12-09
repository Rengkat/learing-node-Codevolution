class SuperHero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

//to avoid caching, the export should be at the class
module.exports = SuperHero;
