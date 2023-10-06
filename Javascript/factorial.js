// Taking in some integer value n, find the factorial for that number and return it.
//  Be careful not to multiply by 0! If you do, you'll wind up with 0 as a result.


function factorial(n) {
    let product = 1;

    for (let i = 1; i <= n; i++){
        product = product * i;
    }
    return product;
}
const n = 5;
module.exports = factorial;