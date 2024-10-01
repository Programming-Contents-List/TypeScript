function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

// const mergeObj = merge({ name: 'Max' }, { age: 30 });
// mergeObj.name;  // error: name과 age의 타입 추론이 불가능하기 때문이다. 그렇기 위해선 as를 사용해서 다시 타입을 추론할 수 있게 해야한다.

const mergeObj = merge({ name: 'Max' }, { age: 30 }) as { name: string, age: number };

mergeObj.name;