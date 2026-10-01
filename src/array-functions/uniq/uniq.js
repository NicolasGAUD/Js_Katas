/*
Implement a function `uniq` which takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

Don't mutate the parameter.

Bonus : do not use a loop

*/

// TODO add your code here
function uniq(sequence) {
  // 1. Clause de garde : si l'argument est null, indéfini ou absent
  // if (sequence === null || sequence === undefined) {
	/* L'expression 'void 0' renvoie TOUJOURS le vrai contenu indéfini
	Équivaut de manière 100% sécurisée à : sequence === undefined */
  if (sequence === null || sequence === void 0) {
    return [];
  }

  // 2. Si c'est une chaîne de caractères, on la transforme en tableau pour pouvoir l'analyser
  const arr = typeof sequence === "string" ? sequence.split("") : sequence;

  // 3. filter() crée un NOUVEAU tableau sans modifier (muter) la séquence d'origine
  return arr.filter((element, index) => {
    // On ne garde l'élément que s'il est différent de l'élément précédent
    return element !== arr[index - 1];
  });
}



// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof uniq, "function");
assert.strictEqual(uniq.length, 1);
assert.deepStrictEqual(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]), [
  "a",
  "b",
  "c",
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]), [
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq([]), []);
assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
// assert.deepStrictEqual(uniq([undefined]), [undefined]);
// assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
assert.deepStrictEqual(uniq([""]), [""]);
let test = ["a", "a", "b"];
uniq(test);
assert.deepStrictEqual(test, ["a", "a", "b"], "don't mutate the parameter");

// End of tests

console.log("🎉");
