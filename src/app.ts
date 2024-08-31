//console.log(person.name); 으로 person.name, 객체 타입으로 접근하기 위한 object 타입 정의 방법
const person: {
  //entry 추가
  //앞서 말했 듯 객체 타입을 정의하기 위해서는 할당 후 `;`를 붙여야 한다.
  name: string;
  age: number;
  // 이렇게 작성을 하게 되면 추후에 정의한 객체 타입을 재활용할 수 있게 된다.
} = {  //`{}` 특정 객체 타입을 위한 표기법, 객체의 구조 정보를 제공하는 것. 빈 `{}`으로 할당을 하면 객체로 할당하는 것과 동일시한다.
  name: 'Maximilian',
  age: 30
};

console.log(person.name); //error : Object에 name이 없습니다. 그렇다면 어떻게 해야할까?