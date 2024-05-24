import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebSocketConnectionService } from "./webSocketConnection.service";
import { WebSocketConnectionControllerBase } from "./base/webSocketConnection.controller.base";

@swagger.ApiTags("webSocketConnections")
@common.Controller("webSocketConnections")
export class WebSocketConnectionController extends WebSocketConnectionControllerBase {
  constructor(protected readonly service: WebSocketConnectionService) {
    super(service);
  }
}
