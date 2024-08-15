//intersection types

import { InterCar, InterToy } from "./utils/data.interface";

const toyCar: InterToy & InterCar = {
  name: '타요',
  start() { },
  color: 'blue',
  price: 1000,
}