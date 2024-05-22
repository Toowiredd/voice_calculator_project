import { UserCommand as TUserCommand } from "../api/userCommand/UserCommand";

export const USERCOMMAND_TITLE_FIELD = "id";

export const UserCommandTitle = (record: TUserCommand): string => {
  return record.id?.toString() || String(record.id);
};
