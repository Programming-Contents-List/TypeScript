const person: {
  name: string,
  age: number,
  hobbies: string[];
  role: (number | string)[];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin');
person.role[1] = 10;
person.role = [0, 'admin', 'user'];

//any는 어떤 타입이든 허용하는 타입이다. 어떻게 보면 유연하다고 느껴지질지 모르겠지만 타입스크립트의 장점을 전혀 활용하지 못하기에 좋은 방법은 아니다.
let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]; //이렇게 배열에 마구잡이로 서로 다른 타입을 넣어도 아무런 에러가 일어나지 않는다.

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}