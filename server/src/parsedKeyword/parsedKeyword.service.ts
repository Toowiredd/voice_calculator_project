import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParsedKeywordServiceBase } from "./base/parsedKeyword.service.base";

@Injectable()
export class ParsedKeywordService extends ParsedKeywordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
