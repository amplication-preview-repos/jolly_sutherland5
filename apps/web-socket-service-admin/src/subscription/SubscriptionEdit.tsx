import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WebSocketConnectionTitle } from "../webSocketConnection/WebSocketConnectionTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="topic" source="topic" />
        <ReferenceInput
          source="webSocketConnection.id"
          reference="WebSocketConnection"
          label="webSocketConnection"
        >
          <SelectInput optionText={WebSocketConnectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
