// Record<K,T> : Record는 다른 유틸리티 타입과 단리 key와 type을 가지고 있다.
//User와 같이 key값을 활용해서 유니온 타입으로 사용할 수 있지만 GradeRecord, ScoreRecord와 같이 key와 type을 따로 지정해서 사용할 수도 있다.
import {
  ScoreFor, GradeRecord,
  ScoreRecord,
  User
} from "./utils/data.interface"

const score: Record<GradeRecord, ScoreRecord> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};

//응용

function isValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}