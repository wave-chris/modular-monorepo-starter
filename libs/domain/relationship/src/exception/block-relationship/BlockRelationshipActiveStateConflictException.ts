import { ConflictException } from '@common/internal-exception';

export class BlockRelationshipActiveStateConflictException extends ConflictException {
  constructor() {
    super('Block Relationship Active state Conflict');
  }
}
