import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ParsedKeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
      </SimpleForm>
    </Edit>
  );
};
