import { ColorsDAO } from '../dao/colors.dao';
import { Colors } from '../dao/entity/colors.entity';
const logger = require('../logger');
export class ColorsService {
  static async createInstance() {
    return new ColorsService();
  }

  static CLASS_NAME = '[ColorsService]';
  private ColorsDAO = ColorsDAO.createInstance();

  async save(colorsBody: Colors) {
    const methodName = '[save]';
    logger.debug(
      ColorsService.CLASS_NAME +
        methodName +
        'start: Saving color :: ' +
        JSON.stringify(colorsBody)
    );
    return this.ColorsDAO.save(colorsBody);
  }

  async fetch() {
    const methodName = '[fetch]';
    logger.debug(
      ColorsService.CLASS_NAME +
        methodName +
        'start: Fetch all colors list :: '
    );

    return this.ColorsDAO.fetchAll();
  }
}
