import { UserCommandWhereInput } from "./UserCommandWhereInput";
import { UserCommandOrderByInput } from "./UserCommandOrderByInput";

export type UserCommandFindManyArgs = {
  where?: UserCommandWhereInput;
  orderBy?: Array<UserCommandOrderByInput>;
  skip?: number;
  take?: number;
};
