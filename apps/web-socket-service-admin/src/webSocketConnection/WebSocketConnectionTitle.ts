import { WebSocketConnection as TWebSocketConnection } from "../api/webSocketConnection/WebSocketConnection";

export const WEBSOCKETCONNECTION_TITLE_FIELD = "socketId";

export const WebSocketConnectionTitle = (
  record: TWebSocketConnection
): string => {
  return record.socketId?.toString() || String(record.id);
};
