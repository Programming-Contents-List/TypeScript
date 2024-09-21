"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
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
var accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.employees[2] = 'Anna';
//위와 같은 방식으로 코드를 작성하고 실행해도 정상적으로 동작을 하지만 복잡한 코드에서 위와 같은 방식은 좋은 방식이 아니다. 따라서 employee를 접근할 수 없게 해야한다. 따라 접근 범위를 제한할 수 있는 private를 사용하면 된다.
accounting.describe();
accounting.printEmployeeInformation();
