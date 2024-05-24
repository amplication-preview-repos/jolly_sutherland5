import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WebSocketConnectionListRelationFilter } from "../webSocketConnection/WebSocketConnectionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
  webSocketConnections?: WebSocketConnectionListRelationFilter;
};
