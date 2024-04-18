const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns[0];
    fib_solns[1] = 1;
    if(n == 1) return fib_solns[1];
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns[n];
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(tailFib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);