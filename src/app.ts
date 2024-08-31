const person = {
  name: 'Maximilian', //일반적인 객체는 `,`와 같이 사용하지만 '타입스크립트가 추론한 객체 타입'은 `;`와 같이 사용된다.
  // 즉, 객체는 키와 값으로 한 쌍을 만들지만 추론 객체는 키와 타입으로 쌍을 이룬다.
  age: 30
};

console.log(person);