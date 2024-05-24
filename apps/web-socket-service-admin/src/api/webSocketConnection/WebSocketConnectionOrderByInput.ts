import { SortOrder } from "../../util/SortOrder";

export type WebSocketConnectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  socketId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
