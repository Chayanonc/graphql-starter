import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersSchema {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;
}
