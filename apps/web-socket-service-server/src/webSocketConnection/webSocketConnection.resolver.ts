import * as graphql from "@nestjs/graphql";
import { WebSocketConnectionResolverBase } from "./base/webSocketConnection.resolver.base";
import { WebSocketConnection } from "./base/WebSocketConnection";
import { WebSocketConnectionService } from "./webSocketConnection.service";

@graphql.Resolver(() => WebSocketConnection)
export class WebSocketConnectionResolver extends WebSocketConnectionResolverBase {
  constructor(protected readonly service: WebSocketConnectionService) {
    super(service);
  }
}
