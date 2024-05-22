import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectedNumberServiceBase } from "./base/detectedNumber.service.base";

@Injectable()
export class DetectedNumberService extends DetectedNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
