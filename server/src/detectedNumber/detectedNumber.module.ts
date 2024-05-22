import { Module } from "@nestjs/common";
import { DetectedNumberModuleBase } from "./base/detectedNumber.module.base";
import { DetectedNumberService } from "./detectedNumber.service";
import { DetectedNumberController } from "./detectedNumber.controller";
import { DetectedNumberResolver } from "./detectedNumber.resolver";

@Module({
  imports: [DetectedNumberModuleBase],
  controllers: [DetectedNumberController],
  providers: [DetectedNumberService, DetectedNumberResolver],
  exports: [DetectedNumberService],
})
export class DetectedNumberModule {}
