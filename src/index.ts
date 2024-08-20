// Generic : 클래스나 타입을 재사용하기 위한 문법
// interface와 Generic을 사용해서 활용할 수도 있다.

import { myUser, myCar, myBook, objectType } from "./utils/data.interface";

const user: myUser = { name: "a", age: 10 };
const car: myCar = { name: "bmw", color: "red" };
const book: myBook = { price: 3000 };

// 제네릭 T를 사용해보면 T가 name 속성을 가지고 있다는 보장이 없기 때문에 error가 뜬다. 따라서 name의 타입을 extends를 사용해서 확장 시키면 error가 사라진다.
function showName<T extends objectType>(data: T): string {
  return data.name ? data.name : "Undefined";
}

showName(user);
showName(car);
showName(book); //error -> book은 name 객체가 없기 때문에 error가 발생한다. 이를 해결하기 위해서는 조건을 통해서 유연하게 대체를 할수 있다.
// book에 name객체를 삽입하는 방법 외의 선택적 방식으로 동작하게 하려고 했으나 book을 해결하면 나머지가 error가 발생 한다. 
// **방법을 한번 찾아보면 좋을 듯 하다.**
//useState같아 보이지 않는가?
