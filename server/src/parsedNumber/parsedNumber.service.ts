import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParsedNumberServiceBase } from "./base/parsedNumber.service.base";

@Injectable()
export class ParsedNumberService extends ParsedNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
