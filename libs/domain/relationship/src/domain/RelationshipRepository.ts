import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { Relationship } from '@domain/relationship/domain/Relationship';
import { ClientSession } from 'mongoose';
import { RelationshipNotFoundException } from '@domain/relationship/exception/RelationshipNotFoundException';

@Injectable()
export class RelationshipRepository {
  constructor(
    @InjectModel('relationships') private readonly Relationship: ModelType<Relationship>
  ) {}

  save(relationship: Relationship, session?: ClientSession): Promise<DocumentType<Relationship>> {
    return new this.Relationship(relationship).save();
  }

  findByFromAndTo(from: string, to: string, session?: ClientSession): Promise<(DocumentType<Relationship> | null)> {
    let findQuery = this.Relationship.findById(Relationship.toId(from, to));

    if (session) {
      findQuery = findQuery.session(session)
    }

    return findQuery.exec();
  }

  async findByFromAndToOrThrow(from: string, to: string, session?: ClientSession): Promise<DocumentType<Relationship>> {
    const relationship = await this.findByFromAndTo(from, to, session);

    if (!relationship) {
      throw new RelationshipNotFoundException(from, to);
    }

    return relationship;
  }
}
