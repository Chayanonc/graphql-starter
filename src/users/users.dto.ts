import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDTO {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;
}
