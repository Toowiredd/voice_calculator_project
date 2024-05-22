import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ParsedKeywordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
      </SimpleForm>
    </Create>
  );
};
