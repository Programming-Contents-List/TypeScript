// const names = [];
// 위의 방식과 아래의 방식은 갇다. 단, 위의 방식은 any[]이지만 아래는 제네릭을 통해서 sting이라고 명시 해주었다.
const names: Array<string | number> = [];

// 이런 Promise도 타입으로 지정을 해주고 제네릭을 사용할 수 있다.
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})