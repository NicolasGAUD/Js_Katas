/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here
function isPalindrome(sentence){
	let indexDebut = 0;
	let indexFin = sentence.length - 1;
	let isEqual = false;
	for (let i = 0; i < sentence.length; i++){
		let lettreDebut = sentence[indexDebut].toLowerCase();
		let lettreFin = sentence[indexFin].toLowerCase();
		if (lettreDebut !== lettreFin){
			isEqual = false;
		}
		else{
			isEqual = true;
		}
		indexDebut++;
		indexFin--;
	}
	return isEqual;
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof isPalindrome, "function");
assert.strictEqual(isPalindrome.length, 1);
assert.strictEqual(isPalindrome("rotor"), true);
assert.strictEqual(isPalindrome("tacos"), false);
assert.strictEqual(isPalindrome("Kayak"), true);
assert.strictEqual(isPalindrome("kayak"), true);
// assert.strictEqual(isPalindrome("null"), true);

// End of tests

console.log("🎉");
