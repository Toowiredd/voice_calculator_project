import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParsedKeywordService } from "./parsedKeyword.service";
import { ParsedKeywordControllerBase } from "./base/parsedKeyword.controller.base";

@swagger.ApiTags("parsedKeywords")
@common.Controller("parsedKeywords")
export class ParsedKeywordController extends ParsedKeywordControllerBase {
  constructor(protected readonly service: ParsedKeywordService) {
    super(service);
  }
}
