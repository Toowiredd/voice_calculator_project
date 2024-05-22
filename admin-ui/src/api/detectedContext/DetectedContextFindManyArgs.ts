import { DetectedContextWhereInput } from "./DetectedContextWhereInput";
import { DetectedContextOrderByInput } from "./DetectedContextOrderByInput";

export type DetectedContextFindManyArgs = {
  where?: DetectedContextWhereInput;
  orderBy?: Array<DetectedContextOrderByInput>;
  skip?: number;
  take?: number;
};
