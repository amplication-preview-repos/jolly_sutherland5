import { Message } from "../message/Message";
import { Subscription } from "../subscription/Subscription";
import { User } from "../user/User";

export type WebSocketConnection = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  socketId: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  user?: User | null;
};
