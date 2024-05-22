/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserCommandWhereUniqueInput } from "./UserCommandWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserCommandUpdateInput } from "./UserCommandUpdateInput";

@ArgsType()
class UpdateUserCommandArgs {
  @ApiProperty({
    required: true,
    type: () => UserCommandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserCommandWhereUniqueInput)
  @Field(() => UserCommandWhereUniqueInput, { nullable: false })
  where!: UserCommandWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserCommandUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserCommandUpdateInput)
  @Field(() => UserCommandUpdateInput, { nullable: false })
  data!: UserCommandUpdateInput;
}

export { UpdateUserCommandArgs as UpdateUserCommandArgs };
