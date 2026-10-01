/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here
function convertTime(time){
	const minutes = 60;
	let timeInMinutes = 0;
	if (isValidTime(time)){
		const tab = time.split(":");
		timeInMinutes = Number(tab[0]) * minutes + Number(tab[1]);
		return timeInMinutes;
	}
	else{
		return null;
	}
}

function isValidTime(timeStr) {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(timeStr);
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convertTime, "function");
assert.strictEqual(convertTime.length, 1);
assert.strictEqual(convertTime("02:30"), 150);
assert.strictEqual(convertTime("01:45"), 105);
assert.strictEqual(convertTime("01h45m"), null);

// TODO add your tests here
// End of tests

console.log("🎉");
