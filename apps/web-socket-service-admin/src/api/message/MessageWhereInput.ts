import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WebSocketConnectionWhereUniqueInput } from "../webSocketConnection/WebSocketConnectionWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  webSocketConnection?: WebSocketConnectionWhereUniqueInput;
};
