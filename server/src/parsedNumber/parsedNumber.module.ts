import { Module } from "@nestjs/common";
import { ParsedNumberModuleBase } from "./base/parsedNumber.module.base";
import { ParsedNumberService } from "./parsedNumber.service";
import { ParsedNumberController } from "./parsedNumber.controller";
import { ParsedNumberResolver } from "./parsedNumber.resolver";

@Module({
  imports: [ParsedNumberModuleBase],
  controllers: [ParsedNumberController],
  providers: [ParsedNumberService, ParsedNumberResolver],
  exports: [ParsedNumberService],
})
export class ParsedNumberModule {}
