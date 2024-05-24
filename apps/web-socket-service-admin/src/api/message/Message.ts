import { WebSocketConnection } from "../webSocketConnection/WebSocketConnection";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  webSocketConnection?: WebSocketConnection | null;
};
