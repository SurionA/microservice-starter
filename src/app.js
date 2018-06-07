import express from 'express';
import ApplicationConfig from './config/app.conf';
import RoutesConfig from './config/routes.conf';

const app = express();

ApplicationConfig(app);
RoutesConfig(app);

export default app;
