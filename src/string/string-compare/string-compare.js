/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO add your code here
function compare(sentence1, sentence2){
	let count = 0;
	if (sentence1 === null || sentence2 === null || sentence1.length !== sentence2.length){
		return -1;
	}
	else{
		for (let i = 0; i < sentence1.length; i++){
			if (sentence1[i] === sentence2[i]){
				count++;
			}
		}
	}
	return count;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof compare, "function");
assert.strictEqual(compare.length, 2);
assert.strictEqual(compare("a","a"), 1);
assert.strictEqual(compare("a","b"), 0);
assert.strictEqual(compare("aa","ba"), 1);
assert.strictEqual(compare("cassis","castor"), 3);
assert.strictEqual(compare("tacos","poulpe"), -1);
assert.strictEqual(compare(null,"a"), -1);

// End of tests

console.log("🎉");
