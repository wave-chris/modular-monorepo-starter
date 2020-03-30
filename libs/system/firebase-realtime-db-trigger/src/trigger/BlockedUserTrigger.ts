import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockedUserTrigger {
  async trigger(userId: string): Promise<void> {
    console.log(`Firebase Blocked User DB triggered: (${userId})`);
  }
}
