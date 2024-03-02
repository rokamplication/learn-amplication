import { OwnFirstWhereInput } from "./OwnFirstWhereInput";
import { OwnFirstOrderByInput } from "./OwnFirstOrderByInput";

export type OwnFirstFindManyArgs = {
  where?: OwnFirstWhereInput;
  orderBy?: Array<OwnFirstOrderByInput>;
  skip?: number;
  take?: number;
};
