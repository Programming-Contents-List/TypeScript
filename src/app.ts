class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ` + this.name)
  }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 'newName', describe: accounting.describe };
//여기서 undefined를 출력하는 이유는 describe가 참조하는 것이 무엇인지 알 수 없기 때문이다.
//따라서 accountingCopy와 같이 새로운 객체로 재생성을 해서 할당하기 위해서는 class의 describe함수의 매개변수에
//this를 넣고 타입지정을 Department로 설정한 뒤(즉, 청사진을 참조하게 설정) accountingCopy에 name 프로퍼티를 기입, 할당해줘야 한다.

accountingCopy.describe();