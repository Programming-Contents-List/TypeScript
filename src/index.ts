//return 값의 타입을 지정하지 않으면 자동으로 void로 설정을 해준다.
const add = (a: number, b: number) => {
  const result = a + b;
  console.log(result);
}

add(1, 2);