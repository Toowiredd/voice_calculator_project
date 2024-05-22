import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DetectedContextWhereInput = {
  contextType?: StringNullableFilter;
  contextValue?: IntNullableFilter;
  id?: StringFilter;
};
