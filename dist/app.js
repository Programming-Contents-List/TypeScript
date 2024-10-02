"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Manu' });
objStorage.removeItem({ name: 'Max' }); //Max를 지웠지만 console.log로 확인하면 Max가 남아 있다.
//이유는 removeItem의 로직이 단순하게 1번째를 삭제하게 되어 있다.
console.log(objStorage.getItems());
