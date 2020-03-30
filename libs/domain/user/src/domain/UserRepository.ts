import { User } from '@domain/user/domain/User';

export interface UserRepository {
  save(user: User): Promise<User>;

  findById(id: string): Promise<User| null>;

  findByIdOrThrow(id: string): Promise<User>;
}
