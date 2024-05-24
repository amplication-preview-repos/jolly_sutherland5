import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WEBSOCKETCONNECTION_TITLE_FIELD } from "../webSocketConnection/WebSocketConnectionTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="webSocketConnection"
          source="websocketconnection.id"
          reference="WebSocketConnection"
        >
          <TextField source={WEBSOCKETCONNECTION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
