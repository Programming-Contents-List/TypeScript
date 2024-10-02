// 제네릭과 유니온 타입

// 유니온 타입으로 정의한 코드
// 얼핏보면 제네릭과 비슷하겠지만 전혀 그렇지 않다.
// 우선 배열안에 어떤 값이 들어가는지에 대한 정의가 되어 있지 않다. 그렇다고 각 타입에 `[]`을 넣어서 설명하기에는 가독성도 떨어질 뿐만아니라 턱없이 명확서이 떨어진다. 즉, 제네릭을 사용하는 편이 훨씬 좋다.
// 단, 조건이 있다면 하나의 interface나 하나의 명세서가 정해져 있고 반환 타입이 있는 상황에서 사용하기가 가장 좋다.
class DataStorage {
  private data: (string | number | boolean)[] = [];
  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem(10);  // 아무런 제약도 없고 개발자가 실수가 발생해도 아무런 경고나 error 메세지가 없다.
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage();

//객체로 조직화 된 것보다 string이나 다른 자료형을 사용하는 것이 보다 나은 선택이다. 따라 Generics의 타입선언에 object를 제외
// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem(maxObj); //Max를 지웠지만 console.log로 확인하면 Max가 남아 있다.
// //이유는 removeItem의 로직이 단순하게 1번째를 삭제하게 되어 있다.
// console.log(objStorage.getItems());