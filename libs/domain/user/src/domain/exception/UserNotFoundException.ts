import { NotFoundException } from '@common/internal-exception/exception';

export class UserNotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`User not found with the ID: ${id}`);
  }
}
