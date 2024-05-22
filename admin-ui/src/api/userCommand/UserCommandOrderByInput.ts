import { SortOrder } from "../../util/SortOrder";

export type UserCommandOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rawInput?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
