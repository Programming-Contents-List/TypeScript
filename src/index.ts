// Required<T> : required는 Partial과 달리 모든 속성들을 필수로 작성해줘야한다.

import { User } from "./utils/data.interface"

let admin: Required<User> = {
  id: 1,
  name: "Bob",
  age: 30,
}