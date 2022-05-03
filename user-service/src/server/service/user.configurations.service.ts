import { UserConfigurationDAO } from '../dao/user.configurations.dao';
import { UserConfigurations } from '../dao/entity/user.configurations.entity';
const logger = require('../logger');
export class UserConfigurationsService {
  static async createInstance() {
    return new UserConfigurationsService();
  }

  static CLASS_NAME = '[UserConfigurationsService]';
  private userConfigurationsDAO = UserConfigurationDAO.createInstance();

  async save(userConfig: UserConfigurations) {
    const methodName = '[save]';
    logger.debug(
      UserConfigurationsService.CLASS_NAME +
        methodName +
        'start: Saving User Config :: ' +
        JSON.stringify(userConfig)
    );
    return this.userConfigurationsDAO.save(userConfig);
  }

  async update(userConfig: UserConfigurations, id: number) {
    const methodName = '[update]';
    logger.debug(
      UserConfigurationsService.CLASS_NAME +
        methodName +
        'start: Updating user configuration for config id :: ' +
        id
    );
    userConfig.id = id;
    return this.userConfigurationsDAO.update(userConfig);
  }
}
