import * as graphql from "@nestjs/graphql";
import { ParsedKeywordResolverBase } from "./base/parsedKeyword.resolver.base";
import { ParsedKeyword } from "./base/ParsedKeyword";
import { ParsedKeywordService } from "./parsedKeyword.service";

@graphql.Resolver(() => ParsedKeyword)
export class ParsedKeywordResolver extends ParsedKeywordResolverBase {
  constructor(protected readonly service: ParsedKeywordService) {
    super(service);
  }
}
