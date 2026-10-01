/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate(fullName){
	const tab = fullName.split(" ");
	let initials  = [];
	for (let i = 0; i < tab.length; i++){
		initials.push(tab[i].charAt(0));
	}
	return initials.join("."); 
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof abbreviate, "function");
assert.strictEqual(abbreviate.length, 1);
assert.strictEqual(abbreviate("Alyson Hannigan"), "A.H");
assert.strictEqual(abbreviate("Cobie Smulders"), "C.S");
assert.strictEqual(abbreviate("Neil Patrick Harris"), "N.P.H");

// End of tests

console.log("🎉");
