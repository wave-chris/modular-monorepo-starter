import { prop } from '@typegoose/typegoose';
import { BlockRelationshipActiveState, BlockRelationshipPassiveState } from './index';
import {
  BlockRelationshipActiveStateConflictException,
  BlockRelationshipPassiveStateConflictException,
} from '@domain/relationship/domain';

export class BlockRelationship {
  @prop()
  private active_state: BlockRelationshipActiveState;

  @prop()
  private passive_state: BlockRelationshipPassiveState;

  constructor() {
    this.active_state = BlockRelationshipActiveState.NONE;
    this.passive_state = BlockRelationshipPassiveState.NONE;
  }

  changeActiveState(activeState: BlockRelationshipActiveState) {
    if (activeState === BlockRelationshipActiveState.NONE) {
      throw new BlockRelationshipActiveStateConflictException();
    }

    this.active_state = activeState;
  }

  changePassiveState(passiveState: BlockRelationshipPassiveState) {
    if (passiveState === BlockRelationshipPassiveState.NONE) {
      throw new BlockRelationshipPassiveStateConflictException();
    }

    this.passive_state = passiveState;
  }
}
