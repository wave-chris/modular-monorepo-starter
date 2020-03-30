import { FriendshipState } from '@domain/relationship/domain/friendship/FriendshipState';
import { prop } from '@typegoose/typegoose';
import { FriendshipStateConflictException } from '@domain/relationship/domain';

export class Friendship {
  @prop({ enum: FriendshipState })
  private state: FriendshipState;

  constructor() {
    this.state = FriendshipState.NONE;
  }

  changeState(state: FriendshipState): void {
    if (this.state === FriendshipState.NONE) {
      throw new FriendshipStateConflictException();
    }

    this.state = state;
  }
}
