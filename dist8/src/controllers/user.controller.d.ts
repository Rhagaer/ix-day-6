import { UserRepositry } from '../repositories/user.repositry';
import { User } from '../models/User';
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepositry);
    createUser(user: User): Promise<User>;
}
