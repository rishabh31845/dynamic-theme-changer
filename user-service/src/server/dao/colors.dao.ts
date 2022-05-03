import { getRepository, } from 'typeorm';
import { SortAndOrderType } from '../type/sql.sort.order.by.type';
import { Colors } from './entity/colors.entity';

const logger = require('../logger');

const className = '[ColorsDAO]';

export class ColorsDAO {
  static createInstance() {
    return new ColorsDAO();
  }

  private colorsRepository = getRepository(Colors);

  async save(color: Colors) {
    const methodName = '[save]';
    logger.debug(
      className + methodName + 'start: save color :: ' + JSON.stringify(color)
    );

    return this.colorsRepository.save(color);
  }

  async fetchAll() {
    const methodName = '[fetchAll]';
    logger.debug(className + methodName + 'start: get colors :: ');

    return this.colorsRepository.find();
  }
}
