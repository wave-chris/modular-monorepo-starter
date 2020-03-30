import { UserRepository } from '@domain/user/domain/UserRepository';
import { User } from '@domain/user/domain/User';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserNotFoundException } from '@domain/user/domain/exception/UserNotFoundException';

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByIdOrThrow(id: string): Promise<User | null> {
    const user = await this.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    return user;
  }
}
