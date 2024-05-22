import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserCommandWhereInput = {
  id?: StringFilter;
  rawInput?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
