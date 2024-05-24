import { WebSocketConnectionUpdateManyWithoutUsersInput } from "./WebSocketConnectionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  username?: string | null;
  webSocketConnections?: WebSocketConnectionUpdateManyWithoutUsersInput;
};
