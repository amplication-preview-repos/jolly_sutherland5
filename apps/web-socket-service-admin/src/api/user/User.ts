import { WebSocketConnection } from "../webSocketConnection/WebSocketConnection";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  username: string | null;
  webSocketConnections?: Array<WebSocketConnection>;
};
