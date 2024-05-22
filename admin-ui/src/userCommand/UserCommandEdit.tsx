import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserCommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="rawInput" multiline source="rawInput" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
