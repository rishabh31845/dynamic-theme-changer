import { getRepository, SelectQueryBuilder } from 'typeorm';
import { SortAndOrderType } from '../type/sql.sort.order.by.type';
import { UserDetails } from './entity/user.details.entity';

const logger = require('../logger');

const className = '[UserDetailsDAO]';

export class UserDetailsDAO {
  static createInstance() {
    return new UserDetailsDAO();
  }

  private userDetailsRepository = getRepository(UserDetails);

  async save(userDetails: UserDetails) {
    const methodName = '[save]';
    logger.debug(
      className +
        methodName +
        'start: save user details :: ' +
        JSON.stringify(userDetails)
    );

    return this.userDetailsRepository.save(userDetails);
  }

  async update(userDetails: UserDetails) {
    const methodName = '[update]';
    logger.debug(
      className +
        methodName +
        'start: update user details for id :: ' +
        userDetails.id
    );

    return this.userDetailsRepository.save(userDetails);
  }

  async findById(id: number) {
    const methodName = '[findById]';
    logger.debug(
      className + methodName + 'start: find user details with id:: ' + id
    );
    return this.userDetailsRepository.findOne(id);
  }

  async findAll() {
    const methodName = '[findAll]';
    logger.debug(className + methodName + 'start: find all user details');
    return this.userDetailsRepository.find();
  }
}
