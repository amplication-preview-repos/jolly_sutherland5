import { WebSocketConnectionCreateNestedManyWithoutUsersInput } from "./WebSocketConnectionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  username?: string | null;
  webSocketConnections?: WebSocketConnectionCreateNestedManyWithoutUsersInput;
};
