import express from 'express';
import { ColorsController } from '../../controller/colors.controller';
export const colorsRoutes: express.Router = express.Router();

const colorsController = ColorsController.createInstance();

colorsRoutes.route('/colors').post(colorsController.create);

colorsRoutes.route('/colors').get(colorsController.fetch);
