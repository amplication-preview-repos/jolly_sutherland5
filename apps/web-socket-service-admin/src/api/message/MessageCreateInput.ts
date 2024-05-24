import { WebSocketConnectionWhereUniqueInput } from "../webSocketConnection/WebSocketConnectionWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
  webSocketConnection?: WebSocketConnectionWhereUniqueInput | null;
};
