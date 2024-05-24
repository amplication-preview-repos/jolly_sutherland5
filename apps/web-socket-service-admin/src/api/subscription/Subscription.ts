import { WebSocketConnection } from "../webSocketConnection/WebSocketConnection";

export type Subscription = {
  createdAt: Date;
  id: string;
  topic: string | null;
  updatedAt: Date;
  webSocketConnection?: WebSocketConnection | null;
};
