import { ConflictException } from '@common/internal-exception';

export class BlockRelationshipPassiveStateConflictException extends ConflictException {
  constructor() {
    super('Block Relationship Passive state Conflict');
  }
}
