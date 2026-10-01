/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here
function countChar(sentence, letter){
	let count = 0;
	if (sentence !== null){
		const tab = sentence.split("");
		for (let i = 0; i < tab.length; i++){
			if (tab[i] === letter){
				count++;
			}
		}
		return count;
	}
	else{
		return -1
	}

}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof countChar, "function");
assert.strictEqual(countChar("","a"), 0);
assert.strictEqual(countChar("a","a"), 1);
assert.strictEqual(countChar("aaaaabbbaa","a"), 7);
assert.strictEqual(countChar("bbacbaaa","c"), 1);
assert.strictEqual(countChar("bbcc","a"), 0);
assert.strictEqual(countChar(null, "a"), -1);

// TODO add your tests here
// End of tests

console.log("🎉");
