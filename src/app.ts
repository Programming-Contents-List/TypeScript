abstract class Department {
  // private id: string;
  // private name: string;
  //현재 Department는 추상클래스로 id가 다른 클래스에서도 사용 되어야해서 private에서 protected로 접근제한자를 변경
  protected employees: string[] = []; // employees 변경
  static fiscalYear = 2020;
  // id 변경
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n
    // console.log(this.fiscalYear); 
    console.log(Department.fiscalYear); //정상동작
  }
  static createEmployee(name: string) {
    return { name: name };
  }

  //abstract인 추상 함수를 사용하라면 해당 class 또한 abstract로 정의 되어야 한다.
  abstract describe(this: Department): void;  //또한 해당 추상 함수에 어떠한 것도 정의되어 있으면 안된다.
  //이제 Department와 연관된 모든 클래스들은 Error가 발생할 것이다.
  // {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    // this.id = '2';  // readonly이기 때문에 error가 발생한다.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//이또한 추상 함수를 정의 해줘야한다.
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  //추상함수 정의
  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  };
}

//현재 abstract 클래스, 추상 함수 describe를 상속받고 있는 Department이기에 Error가 발생 따라 abstract 클래스, 함수가 있는경우 해당 abstract 함수, 변수들은 상속 받은 자식들은 필수로 자식 내부에 정의가 되어 있아야한다.
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
  //추상함수 정의
  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  };

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department('1', 'Accounting');  //추상 클래스는 인스턴스할 수 없다.
const ITaccounting = new ITDepartment('2', ['Max']);

Math.pow(1, 2);
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