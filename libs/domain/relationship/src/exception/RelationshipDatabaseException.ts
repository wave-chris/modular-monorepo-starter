import { ServiceUnavailableException } from '@common/internal-exception';

export class RelationshipDatabaseException extends ServiceUnavailableException {
  constructor(message: string) {
    super(message);
  }
}
