"use strict";
var Department = /** @class */ (function () {
    // readonly는 프로퍼티를 초기화한 후 수정할 수 없다. 즉, 한번 할당 되면 변경되면 안되는 고유 번호들을 설정할 때 readonly를 사용한다.
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = '2';  // readonly이기 때문에 error가 발생한다.
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
// accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();
