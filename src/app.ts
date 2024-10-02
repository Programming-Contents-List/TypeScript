class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

//객체로 조직화 된 것보다 string이나 다른 자료형을 사용하는 것이 보다 나은 선택이다. 따라 Generics의 타입선언에 object를 제외
// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem(maxObj); //Max를 지웠지만 console.log로 확인하면 Max가 남아 있다.
// //이유는 removeItem의 로직이 단순하게 1번째를 삭제하게 되어 있다.
// console.log(objStorage.getItems());
