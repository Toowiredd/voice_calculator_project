import * as graphql from "@nestjs/graphql";
import { ParsedNumberResolverBase } from "./base/parsedNumber.resolver.base";
import { ParsedNumber } from "./base/ParsedNumber";
import { ParsedNumberService } from "./parsedNumber.service";

@graphql.Resolver(() => ParsedNumber)
export class ParsedNumberResolver extends ParsedNumberResolverBase {
  constructor(protected readonly service: ParsedNumberService) {
    super(service);
  }
}
