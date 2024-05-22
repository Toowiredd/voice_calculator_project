import * as graphql from "@nestjs/graphql";
import { DetectedContextResolverBase } from "./base/detectedContext.resolver.base";
import { DetectedContext } from "./base/DetectedContext";
import { DetectedContextService } from "./detectedContext.service";

@graphql.Resolver(() => DetectedContext)
export class DetectedContextResolver extends DetectedContextResolverBase {
  constructor(protected readonly service: DetectedContextService) {
    super(service);
  }
}
