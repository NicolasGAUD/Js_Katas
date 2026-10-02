/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here
function build(nbFloors) {
  // 1. On vérifie le type EN PREMIER
  if (nbFloors === null || isNaN(nbFloors) || typeof nbFloors !== "number") {
    throw new TypeError("Parameter must be a number");
  }
  // 2. Ensuite on vérifie la valeur
  if (nbFloors < 1) {
    throw new RangeError("Parameter must be a number >= 1");
  }

  const pyramid = [];

  for (let i = 1; i <= nbFloors; i++) {
    let sentence = "";

    // Nombre d'espaces nécessaires pour cet étage spécifique
    const spaceCount = nbFloors - i;

    // Espaces à gauche
    for (let j = 0; j < spaceCount; j++) {
      sentence += " ";
    }

    // Étoiles au centre (Votre formule (i * 2) - 1 est parfaitement correcte !)
    for (let j = 0; j < (i * 2) - 1; j++) {
      sentence += "*";
    }

    // Espaces à droite
    for (let j = 0; j < spaceCount; j++) {
      sentence += " ";
    }

    pyramid.push(sentence);
  }

  return pyramid;
}

// Variante moderne
/*for (let i = 1; i <= nbFloors; i++) {
  const spaces = " ".repeat(nbFloors - i);
  const stars = "*".repeat((i * 2) - 1);
  pyramid.push(spaces + stars + spaces);
}*/

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests

console.log("🎉");
