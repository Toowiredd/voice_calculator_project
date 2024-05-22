import { ParsedNumber as TParsedNumber } from "../api/parsedNumber/ParsedNumber";

export const PARSEDNUMBER_TITLE_FIELD = "id";

export const ParsedNumberTitle = (record: TParsedNumber): string => {
  return record.id?.toString() || String(record.id);
};
