import { MessageCreateNestedManyWithoutWebSocketConnectionsInput } from "./MessageCreateNestedManyWithoutWebSocketConnectionsInput";
import { SubscriptionCreateNestedManyWithoutWebSocketConnectionsInput } from "./SubscriptionCreateNestedManyWithoutWebSocketConnectionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketConnectionCreateInput = {
  messages?: MessageCreateNestedManyWithoutWebSocketConnectionsInput;
  socketId?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutWebSocketConnectionsInput;
  user?: UserWhereUniqueInput | null;
};
