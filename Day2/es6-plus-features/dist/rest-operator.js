"use strict";
//rest operator
//can declare array of type any[]
//there should be only one array decalred with rest operator
//this should be the last argument as a parameter
function calAvg(name) {
    var marks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        marks[_i - 1] = arguments[_i];
    }
    console.log(name + " " + marks);
}
calAvg('sai', 10, 20, 20);
calAvg('sai', 10, 20, 20, 20);
calAvg('sai', 10);
