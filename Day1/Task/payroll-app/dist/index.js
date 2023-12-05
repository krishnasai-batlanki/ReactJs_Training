"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, id, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basic = basic;
        this.da = da;
        this.hra = hra;
        this.totalSalary = 0;
    }
    Employee.prototype.calculateSalary = function () {
        this.totalSalary = this.basic + this.da + this.hra;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, id, basic, da, hra, incentive) {
        var _this = _super.call(this, name, id, basic, da, hra) || this;
        _super.prototype.calculateSalary.call(_this);
        _this.totalSalary += incentive;
        return _this;
    }
    return Developer;
}(Employee));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR(name, id, basic, da, hra, gratutiy) {
        var _this = _super.call(this, name, id, basic, da, hra) || this;
        _super.prototype.calculateSalary.call(_this);
        _this.totalSalary += gratutiy;
        return _this;
    }
    return HR;
}(Employee));
var devOne = new Developer('anil', 1, 1000, 500, 200, 100);
var devTwo = new Developer('sunil', 1, 2000, 600, 200, 700);
var hrOne = new Developer('ram', 1, 1200, 500, 100, 100);
var hrTwo = new Developer('jhon', 1, 2700, 600, 200, 900);
var emplpoyeeList = [devOne, devTwo, hrOne, hrTwo];
for (var i = 0; i < emplpoyeeList.length; i++) {
    console.log(emplpoyeeList[i].totalSalary);
}
