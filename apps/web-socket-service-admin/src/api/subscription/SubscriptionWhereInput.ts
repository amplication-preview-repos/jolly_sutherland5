import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebSocketConnectionWhereUniqueInput } from "../webSocketConnection/WebSocketConnectionWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  topic?: StringNullableFilter;
  webSocketConnection?: WebSocketConnectionWhereUniqueInput;
};
