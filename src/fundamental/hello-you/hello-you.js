/*
Create a function `sayHello` which takes a string as parameter and returns: "Hello {first name}", where {first name} is replaced with the argument value, example:
* sayHello("Barbara") -> "Hello Barbara"

If the argument is empty, null or undefined, return "Hello World":
* sayHello(null) -> "Hello World"

*/

// TODO add your code here
function sayHello(firstName) {
    // Si firstName est vide, null ou undefined, on utilise "World"
    if (!firstName || firstName.trim() === "") {
        return "Hello World";
    }
    return `Hello ${firstName}`;
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sayHello, "function");
assert.strictEqual(sayHello.length, 1);
assert.strictEqual(sayHello("Barbara"), "Hello Barbara");
assert.strictEqual(sayHello("Jean-Michel"), "Hello Jean-Michel");
assert.strictEqual(sayHello(""), "Hello World");
assert.strictEqual(sayHello(null), "Hello World");
assert.strictEqual(sayHello(), "Hello World");
// End of tests

console.log("🎉");
