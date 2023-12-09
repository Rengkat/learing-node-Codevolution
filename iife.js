// node uses the iife pattern to execute code
(function () {
  const superHero = "Badman";
  console.log(superHero);
})();

// same name
(function () {
  const superHero = "spiderMan";
  console.log(superHero);
})();
// node js always wrap with the following function using the principles of iife, __dirname, __filename, require, module, exports
//something like this
(function (__dirname, __filename, require, module, exports) {
  const superHero = "spiderMan";
  console.log(superHero);
})();
