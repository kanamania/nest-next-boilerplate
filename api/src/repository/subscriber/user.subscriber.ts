import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  async afterLoad(user: UserEntity): Promise<void> {
    user.name = user.first_name + ' ' + user.last_name;
  }
}
