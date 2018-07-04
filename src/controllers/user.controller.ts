import {inject} from '@loopback/core';
import {RestBindings, requestBody, post} from '@loopback/rest';
import {repository} from '@loopback/repository';
import {UserRepositry} from '../repositories/user.repositry';
import {User} from '../models/User';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class UserController {
  constructor(
    @repository(UserRepositry.name) private userRepo: UserRepositry,
  ) {}

  @post('/user')
  async createUser(@requestBody() user: User) {
    console.log(user);
    return await this.userRepo.create(User);
  }
}
