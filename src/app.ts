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

//현재 상황에서 회계관련 문서가 하나밖에 없다고 가정
//따라서 private를 활용해야 한다.
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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
  //접근제한자: private 부여
  private constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0] || "";
  }

  static getInstance() {
    //this.instance 또는 직접적으로 접근
    if (AccountingDepartment.instance) {  //인스턴스가 없다면 new키워드로 새로운 인스턴스를 생성한다. 이를 통해 하나의 인스턴스로만 동작
      return this.instance;
    }

    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

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

// const NewAccounting = new AccountingDepartment('d2', []); //이제 AccountingDepartment를 사용하려면 생성자가 static이기에 직접 접근방식으로 사용해야한다.

const NewAccounting = AccountingDepartment.getInstance();
const NewAccounting2 = AccountingDepartment.getInstance();
//이제 이둘의 클래스 변수는 하나의 인스턴스로만 접근해서 동작하고 구현된다.
console.log(NewAccounting, NewAccounting2);

// console.log(NewAccounting.mostRecentReport);
NewAccounting.setMostRecentReport = 'Year End Report';
NewAccounting.addReport('Something went wrong...');

console.log(NewAccounting.mostRecentReport);

NewAccounting.printReports();