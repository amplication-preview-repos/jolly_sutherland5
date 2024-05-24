import { Module } from "@nestjs/common";
import { WebSocketConnectionModuleBase } from "./base/webSocketConnection.module.base";
import { WebSocketConnectionService } from "./webSocketConnection.service";
import { WebSocketConnectionController } from "./webSocketConnection.controller";
import { WebSocketConnectionResolver } from "./webSocketConnection.resolver";

@Module({
  imports: [WebSocketConnectionModuleBase],
  controllers: [WebSocketConnectionController],
  providers: [WebSocketConnectionService, WebSocketConnectionResolver],
  exports: [WebSocketConnectionService],
})
export class WebSocketConnectionModule {}
