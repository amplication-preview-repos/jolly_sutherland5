import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketConnectionWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  socketId?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  user?: UserWhereUniqueInput;
};
