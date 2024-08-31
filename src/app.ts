// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5, READ_ONLY, AUTHOR  //이후로는 +1씩 증가를 한다.
};

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,  //0
};

// person.role = Role.READ_ONLY;
// error -> error TS2367: This comparison appears to be unintentional because the types 'Role.READ_ONLY' and 'Role.ADMIN' have no overlap.
// 원인 : person.role이 Role.READ_ONLY로 설정된 후, TypeScript는 person.role이 더 이상 Role.ADMIN과 같은 값이 될 수 없다고 판단하는 것

if (person.role === Role.ADMIN) {
  console.log(person.role);
} else if (person.role === Role.READ_ONLY) {
  console.log(person.role);
} else if (person.role === Role.AUTHOR) {
  console.log(person.role);
}
