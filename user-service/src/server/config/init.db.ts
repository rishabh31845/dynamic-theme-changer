import { Connection, getRepository } from 'typeorm';
import { Colors } from '../dao/entity/colors.entity';
import { UserConfigurations } from '../dao/entity/user.configurations.entity';
import { UserDetails } from '../dao/entity/user.details.entity';

const logger = require('../logger');
const colorsSeedData = require('./seed/colors.data.json') as Colors[];
const userSeedData = require('./seed/user.data.json') as UserDetails[];

const className = '[initDb]';

const initColorsTable = async (connection: Connection) => {
  const methodName = '[initMealsTable]';
  logger.info(className + methodName + 'start');
  const colorsList = await connection.manager.find(Colors);
  if (colorsList && colorsList.length) {
    logger.info('Colors table initialized...');
    return false;
  }

  colorsSeedData.forEach(async colorsObj => {
    try {
      const colorDetails = colorsObj as Colors;
      await connection.manager.insert(Colors, colorDetails);
    } catch (exp) {
      logger.error('Error while initializing colors data ', exp);
    }
  });

  return true;
};

const initUserDetailsTable = async (connection: Connection) => {
  const methodName = '[initUserDetailsTable]';
  logger.info(className + methodName + 'start');

  const userDetails = await connection.manager.find(UserDetails);
  if (userDetails && userDetails.length) {
    logger.info('User details table already initialized...');
    return false;
  }

  userSeedData.forEach(async userObj => {
    try {
      const user = userObj as UserDetails;
      const data = await connection.manager.insert(UserDetails, user);
      const userId = data.raw[0].id;

      userObj.userConfiguration.forEach(async config => {
        const userConfig = {
          configKey: config.configKey,
          configValue: config.configValue,
          userDetails: {
            id: userId,
          } as UserConfigurations,
        };
        await connection.manager.insert(UserConfigurations, userConfig);
      });
    } catch (exp) {
      logger.error('Error while initializing user data ', exp);
    }
  });
  return true;
};

export const initDB = async (connection: Connection) => {
  const methodName = '[initDB]';
  logger.info(className + methodName + 'start');
  await initUserDetailsTable(connection);
  await initColorsTable(connection);
};
