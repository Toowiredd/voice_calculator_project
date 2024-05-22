import { ParsedKeywordWhereInput } from "./ParsedKeywordWhereInput";
import { ParsedKeywordOrderByInput } from "./ParsedKeywordOrderByInput";

export type ParsedKeywordFindManyArgs = {
  where?: ParsedKeywordWhereInput;
  orderBy?: Array<ParsedKeywordOrderByInput>;
  skip?: number;
  take?: number;
};
