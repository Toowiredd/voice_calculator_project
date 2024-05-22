import { Module } from "@nestjs/common";
import { DetectedContextModuleBase } from "./base/detectedContext.module.base";
import { DetectedContextService } from "./detectedContext.service";
import { DetectedContextController } from "./detectedContext.controller";
import { DetectedContextResolver } from "./detectedContext.resolver";

@Module({
  imports: [DetectedContextModuleBase],
  controllers: [DetectedContextController],
  providers: [DetectedContextService, DetectedContextResolver],
  exports: [DetectedContextService],
})
export class DetectedContextModule {}
