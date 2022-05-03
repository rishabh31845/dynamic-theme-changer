import { Request, Response } from 'express';
import { UserConfigurationsService } from '../service/user.configurations.service';
import { HttpResponse } from '../utility/http.response';
import httpStatusCodes from 'http-status-codes';

const logger = require('../logger');
const className = '[UserConfigurationsController]';
export class UserConfigurationsController {
  static createInstance() {
    return new UserConfigurationsController();
  }

  async create(request: Request, response: Response) {
    const input = request.body;
    const methodName = '[create]';
    logger.info(className + methodName + 'start');
    logger.debug(
      className +
        methodName +
        ' Request body to create user configuration details ' +
        JSON.stringify(input)
    );
    const userConfigurationService = await UserConfigurationsService.createInstance();
    try {
      const result = await userConfigurationService.save(input);
      HttpResponse.setResponse(
        response,
        true,
        httpStatusCodes.OK,
        '',
        '',
        result
      );
    } catch (exp) {
        HttpResponse.setResponse(
          response,
          false,
          409,
          'Number of food entries for requested meal is exceeded',
          '',
          null
        );
    }
  }

  async update(request: Request, response: Response) {
    const methodName = '[update]';
    logger.info(className + methodName + 'start');
    const input = request.body;
    const configId: number = Number(request.params.id);
    logger.debug(
      className +
        methodName +
        ' Request body to update config details :: ' +
        JSON.stringify(input) +
        ' for id :: ' +
        configId
    );
    const userConfigService = await UserConfigurationsService.createInstance();
    const result = await userConfigService.update(input, configId);
    HttpResponse.setResponse(
      response,
      true,
      httpStatusCodes.OK,
      '',
      '',
      result
    );
  }
}
