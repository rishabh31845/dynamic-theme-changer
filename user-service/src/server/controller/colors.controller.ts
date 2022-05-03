import { Request, Response } from 'express';
import { ColorsService } from '../service/colors.service';
import { HttpResponse } from '../utility/http.response';
import httpStatusCodes from 'http-status-codes';

const logger = require('../logger');
const className = '[ColorsController]';
export class ColorsController {
  static createInstance() {
    return new ColorsController();
  }

  async create(request: Request, response: Response) {
    const methodName = '[create]';
    logger.info(className + methodName + 'start');
    const input = request.body;
    logger.debug(
      className +
        methodName +
        ' Request body to create meal ' +
        JSON.stringify(input)
    );
    const colorsService = await ColorsService.createInstance();
    const result = await colorsService.save(input);
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
    logger.info(className + methodName + 'start');
    logger.debug(className + methodName + ' Colors categories to be fetched :: ');
    const colorsService = await ColorsService.createInstance();
    const result = await colorsService.fetch();
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
