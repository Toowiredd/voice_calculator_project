import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserCommandService } from "./userCommand.service";
import { UserCommandControllerBase } from "./base/userCommand.controller.base";

@swagger.ApiTags("userCommands")
@common.Controller("userCommands")
export class UserCommandController extends UserCommandControllerBase {
  constructor(protected readonly service: UserCommandService) {
    super(service);
  }
}
