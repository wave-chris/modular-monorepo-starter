import { Injectable } from '@nestjs/common';

@Injectable()
export class FriendsTrigger {
  async trigger(userId: string, friendId: string): Promise<void> {
    console.log(`Firebase Friends DB triggered: (${userId}-${friendId})`);
  }
}
