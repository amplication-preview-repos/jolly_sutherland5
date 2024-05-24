import { WebSocketConnectionWhereUniqueInput } from "../webSocketConnection/WebSocketConnectionWhereUniqueInput";

export type SubscriptionUpdateInput = {
  topic?: string | null;
  webSocketConnection?: WebSocketConnectionWhereUniqueInput | null;
};
