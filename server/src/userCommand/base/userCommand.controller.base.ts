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
import { UserCommandService } from "../userCommand.service";
import { UserCommandCreateInput } from "./UserCommandCreateInput";
import { UserCommand } from "./UserCommand";
import { UserCommandFindManyArgs } from "./UserCommandFindManyArgs";
import { UserCommandWhereUniqueInput } from "./UserCommandWhereUniqueInput";
import { UserCommandUpdateInput } from "./UserCommandUpdateInput";

export class UserCommandControllerBase {
  constructor(protected readonly service: UserCommandService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserCommand })
  async createUserCommand(
    @common.Body() data: UserCommandCreateInput
  ): Promise<UserCommand> {
    return await this.service.createUserCommand({
      data: data,
      select: {
        createdAt: true,
        id: true,
        rawInput: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserCommand] })
  @ApiNestedQuery(UserCommandFindManyArgs)
  async userCommands(@common.Req() request: Request): Promise<UserCommand[]> {
    const args = plainToClass(UserCommandFindManyArgs, request.query);
    return this.service.userCommands({
      ...args,
      select: {
        createdAt: true,
        id: true,
        rawInput: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userCommand(
    @common.Param() params: UserCommandWhereUniqueInput
  ): Promise<UserCommand | null> {
    const result = await this.service.userCommand({
      where: params,
      select: {
        createdAt: true,
        id: true,
        rawInput: true,
        timestamp: true,
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
  @swagger.ApiOkResponse({ type: UserCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserCommand(
    @common.Param() params: UserCommandWhereUniqueInput,
    @common.Body() data: UserCommandUpdateInput
  ): Promise<UserCommand | null> {
    try {
      return await this.service.updateUserCommand({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          rawInput: true,
          timestamp: true,
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
  @swagger.ApiOkResponse({ type: UserCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserCommand(
    @common.Param() params: UserCommandWhereUniqueInput
  ): Promise<UserCommand | null> {
    try {
      return await this.service.deleteUserCommand({
        where: params,
        select: {
          createdAt: true,
          id: true,
          rawInput: true,
          timestamp: true,
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
