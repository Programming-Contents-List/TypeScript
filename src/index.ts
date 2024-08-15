// literal Types

import { UserName } from "./utils/data.interface";

const userName1 = 'Bob';
let userName2: string | number = 'Tom';
userName2 = 3;

const user: UserName = {
  name: "Bob",
  job: "developer"
}