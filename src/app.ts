class Department {
  private id: string;
  private name: string;
  private employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n
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

const accounting = new Department('1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();