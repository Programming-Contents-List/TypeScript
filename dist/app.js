"use strict";
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();
