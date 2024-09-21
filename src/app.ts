class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log(`Department: ` + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; //employee private 설정으로 error 발생
//위와 같은 방식으로 코드를 작성하고 실행해도 정상적으로 동작을 하지만 복잡한 코드에서 위와 같은 방식은 좋은 방식이 아니다. 따라서 employee를 접근할 수 없게 해야한다. 따라 접근 범위를 제한할 수 있는 private를 사용하면 된다.
// private는 class 내에서만 접근이 가능하고 외부에서는 접근할수 없다.
accounting.describe();
accounting.printEmployeeInformation();