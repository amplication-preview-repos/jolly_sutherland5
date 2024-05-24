import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WebSocketConnectionTitle } from "../webSocketConnection/WebSocketConnectionTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
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
