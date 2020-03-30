import { NotFoundException } from '@common/internal-exception';

export class RelationshipNotFoundException extends NotFoundException {
  constructor(from: string, to: string) {
    super(`Relationship not found - from: ${from}, to: ${to}`);
  }
}
