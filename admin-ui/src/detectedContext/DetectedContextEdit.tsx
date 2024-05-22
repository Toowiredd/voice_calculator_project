import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DetectedContextEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contextType" source="contextType" />
        <NumberInput step={1} label="contextValue" source="contextValue" />
      </SimpleForm>
    </Edit>
  );
};
