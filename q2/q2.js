const {prompt} = require('../common.js');

async function main() {
    // write your code here
    n = parseInt(await prompt());
    m = parseInt(await prompt());
    p = parseInt(await prompt());
    if (n > m && n > p) {
      console.log(n);
    } else if (m > p) {
      console.log(m);
    } else {
      console.log(p);
    }
}

main();

// add some comments