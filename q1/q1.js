const {prompt} = require('../common.js');

async function main() {
    // write your code here
    let m = parseInt(await prompt("Enter a number"));
    let n = parseInt(await prompt());
    console.log(n + m);
}

main();