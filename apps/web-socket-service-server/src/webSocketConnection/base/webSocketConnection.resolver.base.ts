/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WebSocketConnection } from "./WebSocketConnection";
import { WebSocketConnectionCountArgs } from "./WebSocketConnectionCountArgs";
import { WebSocketConnectionFindManyArgs } from "./WebSocketConnectionFindManyArgs";
import { WebSocketConnectionFindUniqueArgs } from "./WebSocketConnectionFindUniqueArgs";
import { CreateWebSocketConnectionArgs } from "./CreateWebSocketConnectionArgs";
import { UpdateWebSocketConnectionArgs } from "./UpdateWebSocketConnectionArgs";
import { DeleteWebSocketConnectionArgs } from "./DeleteWebSocketConnectionArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { User } from "../../user/base/User";
import { WebSocketConnectionService } from "../webSocketConnection.service";
@graphql.Resolver(() => WebSocketConnection)
export class WebSocketConnectionResolverBase {
  constructor(protected readonly service: WebSocketConnectionService) {}

  async _webSocketConnectionsMeta(
    @graphql.Args() args: WebSocketConnectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WebSocketConnection])
  async webSocketConnections(
    @graphql.Args() args: WebSocketConnectionFindManyArgs
  ): Promise<WebSocketConnection[]> {
    return this.service.webSocketConnections(args);
  }

  @graphql.Query(() => WebSocketConnection, { nullable: true })
  async webSocketConnection(
    @graphql.Args() args: WebSocketConnectionFindUniqueArgs
  ): Promise<WebSocketConnection | null> {
    const result = await this.service.webSocketConnection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WebSocketConnection)
  async createWebSocketConnection(
    @graphql.Args() args: CreateWebSocketConnectionArgs
  ): Promise<WebSocketConnection> {
    return await this.service.createWebSocketConnection({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => WebSocketConnection)
  async updateWebSocketConnection(
    @graphql.Args() args: UpdateWebSocketConnectionArgs
  ): Promise<WebSocketConnection | null> {
    try {
      return await this.service.updateWebSocketConnection({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WebSocketConnection)
  async deleteWebSocketConnection(
    @graphql.Args() args: DeleteWebSocketConnectionArgs
  ): Promise<WebSocketConnection | null> {
    try {
      return await this.service.deleteWebSocketConnection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: WebSocketConnection,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Subscription], { name: "subscriptions" })
  async findSubscriptions(
    @graphql.Parent() parent: WebSocketConnection,
    @graphql.Args() args: SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    const results = await this.service.findSubscriptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: WebSocketConnection
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
