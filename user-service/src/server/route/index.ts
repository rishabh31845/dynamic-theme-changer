import express from 'express';
import { vars } from '../config/vars';

export const router = express.Router();

import('./' + vars.appVersion + '/colors.router').then(route =>
  router.use(route.colorsRoutes)
);

import('./' + vars.appVersion + '/user.details.router').then(route =>
  router.use(route.userRoutes)
);

import('./' + vars.appVersion + '/user.configurations.router').then(route =>
  router.use(route.userConfigurationsRoutes)
);
