/*
OK, this one will be a bit of a tough challenge!

The goal is to double a value until just before it reaches a top.

Let's say our value is 2 and our top is 100. We would double it like so:

2, 4, 8, 16, 32, 64, 128

 We start at 2, double to 4, 8, so on until 128. We recognize 128 is larger than our top 100 so we return 64. This is the top double for 2 before 100.

The expected result for topDouble(2, 100) would be 64.

1.Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

*/

function topDouble(value, top) {
    while (value * 2 <= top) {
        value *= 2;
    }
    return value;
}

module.exports = topDouble;