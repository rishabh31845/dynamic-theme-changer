import express from 'express';
import { UserDetailsController } from '../../controller/user.details.controller';
export const userRoutes: express.Router = express.Router();

const userController = UserDetailsController.createInstance();

userRoutes
  .route('/users/:id')
  .get(userController.fetch);

userRoutes
.route('/users')
.get(userController.fetchAll);