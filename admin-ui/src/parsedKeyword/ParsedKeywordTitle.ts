import { ParsedKeyword as TParsedKeyword } from "../api/parsedKeyword/ParsedKeyword";

export const PARSEDKEYWORD_TITLE_FIELD = "keyword";

export const ParsedKeywordTitle = (record: TParsedKeyword): string => {
  return record.keyword?.toString() || String(record.id);
};
