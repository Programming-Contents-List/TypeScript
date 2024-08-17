// Generic : 클래스나 타입을 재사용하기 위한 문법
// interface와 Generic을 사용해서 활용할 수도 있다.

import { Mobile } from "./utils/data.interface";

const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  }
};

// object의 타입이 지정이 되어 있다면 아래와 같이 사용하면 된다.
const m11: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  }
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};