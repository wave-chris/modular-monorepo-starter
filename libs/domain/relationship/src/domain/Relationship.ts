import { buildSchema, prop } from '@typegoose/typegoose';
import { Friendship, FriendshipState } from '@domain/relationship/domain/friendship';
import {
  BlockRelationship,
  BlockRelationshipActiveState,
  BlockRelationshipPassiveState,
} from '@domain/relationship/domain/block-relationship';

export class Relationship {
  @prop()
  private _id: string;

  @prop()
  private from: string;

  @prop()
  private to: string;

  @prop({ _id: false })
  private friendship: Friendship;

  @prop({ _id: false })
  private block_relationship: BlockRelationship;

  @prop()
  private created_at: Date;

  @prop()
  private updated_at: Date;

  constructor(from: string, to: string) {
    this._id = Relationship.toId(from, to);
    this.from = from;
    this.to = to;
    this.friendship = new Friendship();
    this.block_relationship = new BlockRelationship();
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static toId(from: string, to: string): string {
    return `${from}_${to}`;
  }

  changeFriendshipState(state: FriendshipState): void {
    this.friendship.changeState(state);
  }
  
  changeBlockRelationshipActiveState(state: BlockRelationshipActiveState): void {
    this.block_relationship.changeActiveState(state);
  }

  changeBlockRelationshipPassiveState(state: BlockRelationshipPassiveState): void {
    this.block_relationship.changePassiveState(state);
  }
}

export const RelationshipSchema = buildSchema(Relationship, { versionKey: false });
RelationshipSchema.pre('save', function() {
  // @ts-ignore
  this.updated_at = new Date();
});
