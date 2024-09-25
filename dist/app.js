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
accounting.employees[2] = 'Anna'; //employee private 설정으로 error 발생
//위와 같은 방식으로 코드를 작성하고 실행해도 정상적으로 동작을 하지만 복잡한 코드에서 위와 같은 방식은 좋은 방식이 아니다. 따라서 employee를 접근할 수 없게 해야한다. 따라 접근 범위를 제한할 수 있는 private를 사용하면 된다.
//TSError: ⨯ Unable to compile TypeScript: src / app.ts: 26: 12 - error TS2341: Property 'employees' is private and only accessible within class 'Department'.
// private는 class 내에서만 접근이 가능하고 외부에서는 접근할수 없다.
// 단, 해당 error 부분은 컴파일할 때는 문제가 없이 동작해서 app.js에서 확인은 가능하지만 런타임 과정에서는 error를 발생시킨다.
accounting.describe();
accounting.printEmployeeInformation();