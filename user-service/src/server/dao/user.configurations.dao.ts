import { getRepository, } from 'typeorm';
import { UserConfigurations } from './entity/user.configurations.entity';

const logger = require('../logger');

const className = '[UserConfigurationDAO]';

export class UserConfigurationDAO {
  static createInstance() {
    return new UserConfigurationDAO();
  }

  private userConfigurationsRepository = getRepository(UserConfigurations);

  async save(userConfig: UserConfigurations) {
    const methodName = '[save]';
    logger.debug(
      className +
        methodName +
        'start: save user config details :: ' +
        JSON.stringify(userConfig)
    );

    return this.userConfigurationsRepository.save(userConfig);
  }

  async update(userConfig: UserConfigurations) {
    const methodName = '[update]';
    logger.debug(
      className +
        methodName +
        'start: update user config details for id :: ' +
        userConfig.id
    );
    return this.userConfigurationsRepository.save(userConfig);
  }
}
