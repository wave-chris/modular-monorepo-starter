import {ClientSession} from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Relationship } from '@domain/relationship/domain';

@Injectable()
export class RelationshipTransactionManager {
  constructor(
    @InjectModel('relationships') private readonly Relationship: ModelType<Relationship>
  ) {}

  async transaction<T>(transactionProcess: (session: ClientSession) => T): Promise<T> {
    const session = await this.Relationship.db.startSession();

    try {
      session.startTransaction();

      return transactionProcess(session);
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
