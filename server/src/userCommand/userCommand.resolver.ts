import * as graphql from "@nestjs/graphql";
import { UserCommandResolverBase } from "./base/userCommand.resolver.base";
import { UserCommand } from "./base/UserCommand";
import { UserCommandService } from "./userCommand.service";

@graphql.Resolver(() => UserCommand)
export class UserCommandResolver extends UserCommandResolverBase {
  constructor(protected readonly service: UserCommandService) {
    super(service);
  }
}
