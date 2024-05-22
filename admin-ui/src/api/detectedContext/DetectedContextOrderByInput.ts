import { SortOrder } from "../../util/SortOrder";

export type DetectedContextOrderByInput = {
  contextType?: SortOrder;
  contextValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
