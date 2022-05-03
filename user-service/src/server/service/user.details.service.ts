import { UserDetailsDAO } from '../dao/user.details.dao';
import { UserDetails } from '../dao/entity/user.details.entity';
const logger = require('../logger');
export class UserDetailsService {
  static async createInstance() {
    return new UserDetailsService();
  }

  static CLASS_NAME = '[UserDetailsService]';
  private UserDetailsDAO = UserDetailsDAO.createInstance();

  async save(userDetails: UserDetails) {
    const methodName = '[save]';
    logger.debug(
      UserDetailsService.CLASS_NAME +
        methodName +
        ' start: Creating user :: ' +
        JSON.stringify(userDetails)
    );
    return this.UserDetailsDAO.save(userDetails);
  }

  async fetch(id: number) {
    const methodName = '[fetch]';
    logger.debug(
      UserDetailsService.CLASS_NAME +
        methodName +
        'start: Fetch user by id :: ' +
        id
    );
    const userDetails = await this.UserDetailsDAO.findById(id);
    return userDetails;
  }

  async fetchAll() {
    const methodName = '[fetchAll]';
    logger.debug(
      UserDetailsService.CLASS_NAME + methodName + 'start: Fetch users'
    );
    const userDetails = await this.UserDetailsDAO.findAll();
    return userDetails;
  }
}
