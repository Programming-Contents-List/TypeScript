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

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set setMostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
    this.lastReport = value;  // 여기서 lastReport를 업데이트 그래야 lastReport가 비어있지 않기 때문에 정상적으로 동작을 한다.
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    //strictPropertyInitialization 활성화로 초기화 해줘야 함.
    this.lastReport = reports[0] || ""; // 초기값을 할당 (reports가 비어있으면 빈 문자열)
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

// console.log(NewAccounting.mostRecentReport);  //report가 추가되지 않아서 Error
NewAccounting.setMostRecentReport = 'Year End Report';
NewAccounting.addReport('Something went wrong...');

console.log(NewAccounting.mostRecentReport);  //report가 있어서 문제없이 출력

NewAccounting.printReports();
