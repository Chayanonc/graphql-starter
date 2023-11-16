import { Injectable } from '@nestjs/common';
import { users } from 'src/stores/users.store';
import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {
  getAllUsers() {
    return users;
  }

  findOneById(id: number) {
    return users.filter((item) => item.id === id)[0];
  }

  createUser(data: UserDTO) {
    return [...users, { id: users.length + 1, ...data }];
  }
}
