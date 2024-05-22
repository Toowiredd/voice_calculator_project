import { Module } from "@nestjs/common";
import { ParsedKeywordModuleBase } from "./base/parsedKeyword.module.base";
import { ParsedKeywordService } from "./parsedKeyword.service";
import { ParsedKeywordController } from "./parsedKeyword.controller";
import { ParsedKeywordResolver } from "./parsedKeyword.resolver";

@Module({
  imports: [ParsedKeywordModuleBase],
  controllers: [ParsedKeywordController],
  providers: [ParsedKeywordService, ParsedKeywordResolver],
  exports: [ParsedKeywordService],
})
export class ParsedKeywordModule {}
