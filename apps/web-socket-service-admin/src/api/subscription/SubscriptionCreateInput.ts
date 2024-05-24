import { WebSocketConnectionWhereUniqueInput } from "../webSocketConnection/WebSocketConnectionWhereUniqueInput";

export type SubscriptionCreateInput = {
  topic?: string | null;
  webSocketConnection?: WebSocketConnectionWhereUniqueInput | null;
};
