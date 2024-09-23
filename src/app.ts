class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n
    // console.log(this.fiscalYear); //Error: static은 생성자가 필요 없기 때문에 Error 발생 즉, 생성자 함수, 클래스 내부에서는 static으로 선언된 정적인 함수, 변수는 재정의나 활용이 불가능 
    //만약 접근을 하려면 해당 클래스를 명시하고 접근을 해야 정상동작
    console.log(Department.fiscalYear); //정상동작
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