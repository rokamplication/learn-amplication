import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OwnFirstWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Active" | "Inactive";
};
