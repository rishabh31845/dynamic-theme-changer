import { Request, Response } from 'express';
import { UserDetailsService } from '../service/user.details.service';
import { HttpResponse } from '../utility/http.response';
import httpStatusCodes from 'http-status-codes';

const logger = require('../logger');
const className = '[UserDetailsController]';
export class UserDetailsController {
  static createInstance() {
    return new UserDetailsController();
  }

  async create(request: Request, response: Response) {
    const input = request.body;
    const methodName = '[create]';
    logger.info(className + methodName + 'start');
    logger.debug(
      className +
        methodName +
        ' Request body to create user ' +
        JSON.stringify(input)
    );
    const userDetailsService = await UserDetailsService.createInstance();
    const result = await userDetailsService.save(input);
    HttpResponse.setResponse(
      response,
      true,
      httpStatusCodes.OK,
      '',
      '',
      result
    );
  }

  async fetch(request: Request, response: Response) {
    const methodName = '[fetch]';
    const userId = Number(request.params.id);
    logger.info(className + methodName + 'start');
    logger.debug(
      className + methodName + ' User details to be fetched for id :: ' + userId
    );
    const userDetailsService = await UserDetailsService.createInstance();
    const result = await userDetailsService.fetch(userId);
    HttpResponse.setResponse(
      response,
      true,
      httpStatusCodes.OK,
      '',
      '',
      result
    );
  }

  async fetchAll(request: Request, response: Response) {
    const methodName = '[fetchAll]';
    logger.info(className + methodName + 'start');
    logger.debug(className + methodName + ' Fetch User details list :: ');
    const userDetailsService = await UserDetailsService.createInstance();
    const result = await userDetailsService.fetchAll();
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
