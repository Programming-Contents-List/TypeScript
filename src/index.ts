// Pick<K,T> : Pick은 내가 원하는 Type만 가지고 와서 사용할 수 있다.
import {
  GradeType, ScoreType, User
} from "./utils/data.interface"

const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: 'Bob',
}