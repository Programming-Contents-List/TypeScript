let userInput: unknown; // any 와 비교가 되는 unknown Type
//unknown Type은 어떤 타입이 사용될지 모를 때 사용된다.
//any와의 차이
// userName에 userInput을 할당 했지만 오류가 발생한다. unknown을 any로 교체하면 해당 에러는 사라진다. 즉, 타입이 정확히 정해지지 않았을 뿐, any처럼 어떤 값이든 무작위로 사용을 허용한다는 것은 아니다. 다시 말해서 typeof로 확인을 해보면 마지막에 할당 한 값으로 userInput은 값이 할당 되어 있다.literal Type을 확인하면 여전히 unknown으로 할당이 된다.
let userName: string;
userInput = 5;
userInput = 'Max';
//userName = userInput; //error ts(2322) -> 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.

console.log(typeof userInput);