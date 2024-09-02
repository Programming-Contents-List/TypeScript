let userInput: unknown; // any 와 비교가 되는 unknown Type
//unknown Type은 어떤 타입이 사용될지 모를 때 사용된다.
//any와의 차이
// userName에 userInput을 할당 했지만 오류가 발생한다. unknown을 any로 교체하면 해당 에러는 사라진다. 즉, 타입이 정확히 정해지지 않았을 뿐, any처럼 어떤 값이든 무작위로 사용을 허용한다는 것은 아니다. 다시 말해서 typeof로 확인을 해보면 마지막에 할당 한 값으로 userInput은 값이 할당 되어 있다.literal Type을 확인하면 여전히 unknown으로 할당이 된다.

let userName: string;
userInput = 5;
userInput = 'Max';

console.log(typeof userInput);

//userName = userInput; //error ts(2322) -> 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.
//그렇다면 userName에 userInput 값을 할당이 가능하게 하려면 어떻게 해야할까? 지난 강의에서도 계속 언급했듯 if문이라는 조건문을 통해서 userName의 타입을 확인 할 수 있는 환경을 조성해주면 된다.

if (typeof userInput === 'string') {
  userName = userInput;
}

//결론적으로 any보다 unknown으로 타입을 할당하게 되면 if문으로 검수,검토를 통해서 값을 재할당하거나 활용할 수 있기 때문에 가시적으로도 코드의 가독성적으로도 훨씬 안정적인 코드를 작성할 수 있다.