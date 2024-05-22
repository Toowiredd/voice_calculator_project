import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectedContextServiceBase } from "./base/detectedContext.service.base";

@Injectable()
export class DetectedContextService extends DetectedContextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
