import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEBSOCKETCONNECTION_TITLE_FIELD } from "../webSocketConnection/WebSocketConnectionTitle";

export const SubscriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Subscriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
