import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  webSocketConnectionId?: SortOrder;
};
