import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCommandServiceBase } from "./base/userCommand.service.base";

@Injectable()
export class UserCommandService extends UserCommandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
