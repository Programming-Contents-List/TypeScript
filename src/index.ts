// Omit<K,T> : Omit은 Pick과 반대로 특정 타입을 생략해서 사용할 수 있다.

import {
  GradeType, ScoreType, User
} from "./utils/data.interface"

const admin: Omit<User, "age" | "gender"> = {
  id: 0,
  name: 'Bob',
}