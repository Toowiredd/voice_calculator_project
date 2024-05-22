import * as graphql from "@nestjs/graphql";
import { DetectedNumberResolverBase } from "./base/detectedNumber.resolver.base";
import { DetectedNumber } from "./base/DetectedNumber";
import { DetectedNumberService } from "./detectedNumber.service";

@graphql.Resolver(() => DetectedNumber)
export class DetectedNumberResolver extends DetectedNumberResolverBase {
  constructor(protected readonly service: DetectedNumberService) {
    super(service);
  }
}
