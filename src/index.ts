//object and interface

import { user } from "./data/data";

console.log(user.name);

user.age = 10;

// user.gender = 'male';  //-> error : user라는 데이터에는 해당 객체, interface가 존재하지 않는다. 하지만 이를 옵셔널로 처리 하면 아래와 같다.

user.gender = 'male';
console.log(user.gender); //data 객체에는 gender가 없지만 interface에서 '옵셔널'로 처리했기 때문에 문제없이 사용할 수 있다.

// user.birthYear = 1999; //-> error : readonly속성이 부여되어 있기 떄문에 객체 수정이 불가능 하다.

console.log(user[1]); //인덱스 시그니처 방식