import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StringUtil } from '@common/util/string/StringUtil';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  @Column('id')
  private id: string;

  @Column('username')
  private username: string;

  @Column('display_name')
  private displayName: string;

  constructor(username: string, displayName: string) {
    if (StringUtil.isBlank(username) || StringUtil.isBlank(displayName)) {

    }
    this.username = username;
    this.displayName = displayName;
  }

  toJson(): { id: string, username: string, displayName: string } {
    return {
      id: this.id,
      username: this.username,
      displayName: this.displayName
    };
  }
}
