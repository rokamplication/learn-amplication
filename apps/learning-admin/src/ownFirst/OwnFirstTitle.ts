import { OwnFirst as TOwnFirst } from "../api/ownFirst/OwnFirst";

export const OWNFIRST_TITLE_FIELD = "name";

export const OwnFirstTitle = (record: TOwnFirst): string => {
  return record.name?.toString() || String(record.id);
};
