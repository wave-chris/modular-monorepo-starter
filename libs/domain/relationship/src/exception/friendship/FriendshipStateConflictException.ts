import { ConflictException } from '@common/internal-exception';

export class FriendshipStateConflictException extends ConflictException {
  constructor() {
    super('Friendship state Conflict');
  }
}
