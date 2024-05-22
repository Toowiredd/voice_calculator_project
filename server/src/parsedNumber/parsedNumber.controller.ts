import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParsedNumberService } from "./parsedNumber.service";
import { ParsedNumberControllerBase } from "./base/parsedNumber.controller.base";

@swagger.ApiTags("parsedNumbers")
@common.Controller("parsedNumbers")
export class ParsedNumberController extends ParsedNumberControllerBase {
  constructor(protected readonly service: ParsedNumberService) {
    super(service);
  }
}
