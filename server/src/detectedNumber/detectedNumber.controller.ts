import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectedNumberService } from "./detectedNumber.service";
import { DetectedNumberControllerBase } from "./base/detectedNumber.controller.base";

@swagger.ApiTags("detectedNumbers")
@common.Controller("detectedNumbers")
export class DetectedNumberController extends DetectedNumberControllerBase {
  constructor(protected readonly service: DetectedNumberService) {
    super(service);
  }
}
