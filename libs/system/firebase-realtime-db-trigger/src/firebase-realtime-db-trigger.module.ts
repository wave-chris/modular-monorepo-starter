import { DynamicModule, Module } from '@nestjs/common';
import { BlockedUserTrigger, FriendsTrigger } from '@system/system/firebase-realtime-db-trigger/trigger';

@Module({})
export class FirebaseRealtimeDbTriggerModule {
  static register(): DynamicModule {
    return {
      module: FirebaseRealtimeDbTriggerModule,
      providers: [FriendsTrigger, BlockedUserTrigger],
      exports: [FriendsTrigger, BlockedUserTrigger],
    }
  }
}
