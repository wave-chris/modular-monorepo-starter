import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { RelationshipSchema } from '@domain/relationship/domain/Relationship';
import { FriendRequestService } from '@domain/relationship/service/FriendRequestService';
import { UserBlockService } from '@domain/relationship/service/UserBlockService';

@Module({})
export class RelationshipModule {
  static readonly CONNECTION_NAME = 'relationship';

  static register(
    mongodbUri: string,
    mongooseModuleOptions?: MongooseModuleOptions
  ): DynamicModule {
    return {
      module: RelationshipModule,
      imports: [
        MongooseModule.forRoot(mongodbUri, {
          ...mongooseModuleOptions,
          connectionName: this.CONNECTION_NAME
        }),
        MongooseModule.forFeature([
          { name: 'relationships', collection: 'relationships', schema: RelationshipSchema }
        ], this.CONNECTION_NAME)
      ],
      providers: [
        FriendRequestService,
        UserBlockService
      ],
      exports: [
        MongooseModule,
        FriendRequestService,
        UserBlockService
      ],
    }
  }
}
