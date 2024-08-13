import { arrNumber, arrString } from "./data/arr";

const showItems = (arr: string[]) => {
  arr.forEach(element => console.log(element));
}
//여기서 함수 자체 파라메터에서도 타입을 개발자가 직접 넣어볼 수 있지 않을까?
showItems(arrString);