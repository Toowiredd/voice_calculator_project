/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ParsedNumberService } from "../parsedNumber.service";
import { ParsedNumberCreateInput } from "./ParsedNumberCreateInput";
import { ParsedNumber } from "./ParsedNumber";
import { ParsedNumberFindManyArgs } from "./ParsedNumberFindManyArgs";
import { ParsedNumberWhereUniqueInput } from "./ParsedNumberWhereUniqueInput";
import { ParsedNumberUpdateInput } from "./ParsedNumberUpdateInput";

export class ParsedNumberControllerBase {
  constructor(protected readonly service: ParsedNumberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ParsedNumber })
  async createParsedNumber(
    @common.Body() data: ParsedNumberCreateInput
  ): Promise<ParsedNumber> {
    return await this.service.createParsedNumber({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ParsedNumber] })
  @ApiNestedQuery(ParsedNumberFindManyArgs)
  async parsedNumbers(@common.Req() request: Request): Promise<ParsedNumber[]> {
    const args = plainToClass(ParsedNumberFindManyArgs, request.query);
    return this.service.parsedNumbers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ParsedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async parsedNumber(
    @common.Param() params: ParsedNumberWhereUniqueInput
  ): Promise<ParsedNumber | null> {
    const result = await this.service.parsedNumber({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ParsedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateParsedNumber(
    @common.Param() params: ParsedNumberWhereUniqueInput,
    @common.Body() data: ParsedNumberUpdateInput
  ): Promise<ParsedNumber | null> {
    try {
      return await this.service.updateParsedNumber({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ParsedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteParsedNumber(
    @common.Param() params: ParsedNumberWhereUniqueInput
  ): Promise<ParsedNumber | null> {
    try {
      return await this.service.deleteParsedNumber({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
