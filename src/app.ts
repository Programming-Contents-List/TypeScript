class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n
  }

  static createEmployee(name: string) {
    return { name: name };
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
    this.lastReport = value;
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0] || "";
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

Math.pow(1, 2); //new, 인스턴스를 사용하지 않고 바로 사용할 수 있는 클래스 Math가 있다. 이와 같이 우리의 class도 구현 해볼 것이다. 방법은 static을 사용하는 것이다.

const employees1 = Department.createEmployee('Max');  //정적 메소드 불러오는 방식
console.log(employees1, Department.fiscalYear);

ITaccounting.addEmployee('Max');
ITaccounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';
ITaccounting.describe();
ITaccounting.printEmployeeInformation();

const NewAccounting = new AccountingDepartment('d2', []);

// console.log(NewAccounting.mostRecentReport);
NewAccounting.setMostRecentReport = 'Year End Report';
NewAccounting.addReport('Something went wrong...');

console.log(NewAccounting.mostRecentReport);

NewAccounting.printReports();