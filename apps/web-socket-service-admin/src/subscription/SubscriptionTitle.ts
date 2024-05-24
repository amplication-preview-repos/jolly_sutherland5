import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "topic";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.topic?.toString() || String(record.id);
};
