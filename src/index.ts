// Readonly<T> : ReadOnly는 읽기 전용으로 된다. 이후 값을 변경하려고 하면 error가 발생한다.

import { User } from "./utils/data.interface"

let admin: Readonly<User> = {
  id: 1,
  name: "Bob",
  age: 30,
}

// admin.id = 2;  // error-> readonly로 인한 error 발생