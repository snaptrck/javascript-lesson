/*
Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times. For example:
scream(5); // "aaaaa"
scream(10); // "aaaaaaaaaa"

*/

function scream(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += "a";
    }
    return str;
}

module.exports = scream;
