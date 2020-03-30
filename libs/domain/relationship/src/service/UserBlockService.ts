import { Injectable } from '@nestjs/common';
import { RelationshipTransactionManager } from './transaction/RelationshipTransactionManager';
import { RelationshipManager } from '@domain/relationship/domain';
import { ClientSession } from 'mongoose';

@Injectable()
export class UserBlockService {
  constructor(
    private readonly relationshipManager: RelationshipManager,
    private readonly transactionManager: RelationshipTransactionManager,
  ) {}

  block(blockerId: string, targetId: string, session?: ClientSession): Promise<void> {
    return this.relationshipManager.block(blockerId, targetId, session);
  }

  unnblock(blockerId: string, targetId: string) {
    return this.relationshipManager.unblock(blockerId, targetId);
  }

  getTransactionManager(): RelationshipTransactionManager {
    return this.transactionManager;
  }
}
