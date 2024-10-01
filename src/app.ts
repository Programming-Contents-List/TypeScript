// const names = [];
// 위의 방식과 아래의 방식은 갇다. 단, 위의 방식은 any[]이지만 아래는 제네릭을 통해서 sting이라고 명시 해주었다.
// Array 제네릭 클래스
const names: Array<string | number> = [];

// 이런 Promise도 타입으로 지정을 해주고 제네릭을 사용할 수 있다.
// 여기서는 Promise로 내장되어 있는 제네릭 클래스를 사용한 것이다.
//즉, <string>은 반환 타입을 명시한 것이다. 
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
});
// 이제 앞으로는 일반적인 변수, 함수를 제네릭을 지정하는 방식을 살펴볼 것이다.