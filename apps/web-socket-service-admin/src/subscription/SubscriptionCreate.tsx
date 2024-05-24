import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WebSocketConnectionTitle } from "../webSocketConnection/WebSocketConnectionTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
