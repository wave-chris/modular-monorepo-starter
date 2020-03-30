import { Injectable } from '@nestjs/common';
import { ClientSession } from 'mongoose';
import { RelationshipRepository } from '@domain/relationship/repository';
import { Relationship } from '@domain/relationship/domain/Relationship';
import { DocumentType } from '@typegoose/typegoose';

@Injectable()
export class RelationshipManager {
  constructor(
    private readonly relationshipRepository: RelationshipRepository
  ) {}

  async sendFriendRequest(requestSenderId: string, requestReceiverId: string, session: ClientSession): Promise<void> {
    const a = await this.relationshipRepository.findByFromAndTo(requestSenderId, requestReceiverId)
  }

  block(blockerId: string, targetId: string, session: ClientSession) {
    return undefined;
  }

  unblock(blockerId: string, tagetId: string, session?: ClientSession) {

  }

  async findRelationshipsOrCreate(from: string, to: string, session: ClientSession): Promise<DocumentType<Relationship>[]> {
    let fromTo = await this.relationshipRepository.findByFromAndTo(from, to, session);
    let toFrom = await this.relationshipRepository.findByFromAndTo(to, from, session);

    if (!fromTo || !toFrom) {
      fromTo = new Relationship(from, to);
      toFrom = new Relationship(to, from);
    }

    return [fromTo, toFrom];
  }
}


