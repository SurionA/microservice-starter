import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import contentLength from 'express-content-length-validator';
import compression from 'compression';
import helmet from 'helmet';

export default function ApplicationConfig(app) {
  app.set('views', path.join(__dirname, '../../views'));
  app.set('view engine', 'pug');

  app.use(
    logger('dev', {
      skip: () => app.get('env') === 'test',
    })
  );

  app.use(cors());
  app.use(helmet());
  app.use(contentLength.validateMax({ max: 999 }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../public')));
}
