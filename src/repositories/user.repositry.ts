import {DefaultCrudRepository} from '@loopback/repository';
import {DataSource} from 'loopback-datasource-juggler';
import {User} from '../models/User';
import {inject} from '@loopback/core';

export class UserRepositry extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(@inject('datascources.db') protected datasource: DataSource) {
    super(User, datasource);
  }
}
