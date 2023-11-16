import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDTO } from './users.dto';
import { UsersSchema } from './users.schema';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UsersSchema])
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Query(() => UsersSchema)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  @Mutation(() => [UsersSchema])
  async createUser(@Args('data') data: UserDTO) {
    return this.usersService.createUser(data);
  }
}
