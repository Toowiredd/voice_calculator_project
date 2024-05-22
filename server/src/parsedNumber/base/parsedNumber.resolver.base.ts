/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ParsedNumber } from "./ParsedNumber";
import { ParsedNumberCountArgs } from "./ParsedNumberCountArgs";
import { ParsedNumberFindManyArgs } from "./ParsedNumberFindManyArgs";
import { ParsedNumberFindUniqueArgs } from "./ParsedNumberFindUniqueArgs";
import { DeleteParsedNumberArgs } from "./DeleteParsedNumberArgs";
import { ParsedNumberService } from "../parsedNumber.service";
@graphql.Resolver(() => ParsedNumber)
export class ParsedNumberResolverBase {
  constructor(protected readonly service: ParsedNumberService) {}

  async _parsedNumbersMeta(
    @graphql.Args() args: ParsedNumberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ParsedNumber])
  async parsedNumbers(
    @graphql.Args() args: ParsedNumberFindManyArgs
  ): Promise<ParsedNumber[]> {
    return this.service.parsedNumbers(args);
  }

  @graphql.Query(() => ParsedNumber, { nullable: true })
  async parsedNumber(
    @graphql.Args() args: ParsedNumberFindUniqueArgs
  ): Promise<ParsedNumber | null> {
    const result = await this.service.parsedNumber(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ParsedNumber)
  async deleteParsedNumber(
    @graphql.Args() args: DeleteParsedNumberArgs
  ): Promise<ParsedNumber | null> {
    try {
      return await this.service.deleteParsedNumber(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}