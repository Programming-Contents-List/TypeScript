import { User } from "./utils/data.interface";
// 유니온 타입의 user의 key 값을 가지고와 keyof로 간단하게 작성할 수 있다.
type UserKey = keyof User;

const uk: UserKey = 'id';