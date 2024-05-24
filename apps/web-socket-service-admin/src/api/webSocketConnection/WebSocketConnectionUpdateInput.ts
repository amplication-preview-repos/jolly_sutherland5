import { MessageUpdateManyWithoutWebSocketConnectionsInput } from "./MessageUpdateManyWithoutWebSocketConnectionsInput";
import { SubscriptionUpdateManyWithoutWebSocketConnectionsInput } from "./SubscriptionUpdateManyWithoutWebSocketConnectionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketConnectionUpdateInput = {
  messages?: MessageUpdateManyWithoutWebSocketConnectionsInput;
  socketId?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutWebSocketConnectionsInput;
  user?: UserWhereUniqueInput | null;
};
