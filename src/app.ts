class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];
  // readonly는 프로퍼티를 초기화한 후 수정할 수 없다. 즉, 한번 할당 되면 변경되면 안되는 고유 번호들을 설정할 때 readonly를 사용한다.
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = '2';  // readonly이기 때문에 error가 발생한다.
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, public admin: string[]) {
    super(id, 'IT');
    this.admins = admin;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Account');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Department('1', 'Accounting');
const ITaccounting = new ITDepartment('2', ['Max']);

ITaccounting.addEmployee('Max');
ITaccounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';
ITaccounting.describe();
ITaccounting.printEmployeeInformation();

const NewAccounting = new AccountingDepartment('d2', []);

NewAccounting.addReport('Something went wrong...');

NewAccounting.printReports();
