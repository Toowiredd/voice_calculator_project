import { Module } from "@nestjs/common";
import { UserCommandModuleBase } from "./base/userCommand.module.base";
import { UserCommandService } from "./userCommand.service";
import { UserCommandController } from "./userCommand.controller";
import { UserCommandResolver } from "./userCommand.resolver";

@Module({
  imports: [UserCommandModuleBase],
  controllers: [UserCommandController],
  providers: [UserCommandService, UserCommandResolver],
  exports: [UserCommandService],
})
export class UserCommandModule {}
