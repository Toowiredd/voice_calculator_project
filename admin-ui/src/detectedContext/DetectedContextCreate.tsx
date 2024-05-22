import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DetectedContextCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contextType" source="contextType" />
        <NumberInput step={1} label="contextValue" source="contextValue" />
      </SimpleForm>
    </Create>
  );
};
