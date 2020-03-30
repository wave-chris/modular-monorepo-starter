import { BadRequestException } from '@common/internal-exception';

export class InvalidUsernameException extends BadRequestException {
  constructor(username: string) {
    super(`Invalid Username: ${username}`);
  }
}
