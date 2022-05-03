import express from 'express';
import { UserConfigurationsController } from '../../controller/user.configurations.controller';
export const userConfigurationsRoutes: express.Router = express.Router();

const userConfigController = UserConfigurationsController.createInstance();
userConfigurationsRoutes.route('/userconfig').post(userConfigController.create);

userConfigurationsRoutes
  .route('/userconfig/:id')
  .put(userConfigController.update);
