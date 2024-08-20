// Partial<T>

import { User } from "./utils/data.interface"

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
  // job:"" //-> error interface에 없는 객체를 사용하려고 해서 발생하는 에러이다.
}