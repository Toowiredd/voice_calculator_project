import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectedContextService } from "./detectedContext.service";
import { DetectedContextControllerBase } from "./base/detectedContext.controller.base";

@swagger.ApiTags("detectedContexts")
@common.Controller("detectedContexts")
export class DetectedContextController extends DetectedContextControllerBase {
  constructor(protected readonly service: DetectedContextService) {
    super(service);
  }
}
