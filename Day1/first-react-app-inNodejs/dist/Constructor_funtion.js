"use strict";
function person(name, id, sal) {
    this.name = name;
    this.id = id;
    this.sal = sal;
    console.log(name + " " + id + " " + sal);
}
var anilref = new person('anil', 1, 100);
console.log(anilref);
