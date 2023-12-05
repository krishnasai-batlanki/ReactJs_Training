"use strict";
var var1 = 100;
function outer() {
    var var2 = 10;
    function inner() {
        var var3 = 20;
        var res = var1 + var2 + var3;
        console.log(res);
    }
    inner();
}
outer();
