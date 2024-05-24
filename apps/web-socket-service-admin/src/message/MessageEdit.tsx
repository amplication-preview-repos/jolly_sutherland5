import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WebSocketConnectionTitle } from "../webSocketConnection/WebSocketConnectionTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
