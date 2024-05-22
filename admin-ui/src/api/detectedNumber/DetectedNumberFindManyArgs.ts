import { DetectedNumberWhereInput } from "./DetectedNumberWhereInput";
import { DetectedNumberOrderByInput } from "./DetectedNumberOrderByInput";

export type DetectedNumberFindManyArgs = {
  where?: DetectedNumberWhereInput;
  orderBy?: Array<DetectedNumberOrderByInput>;
  skip?: number;
  take?: number;
};
