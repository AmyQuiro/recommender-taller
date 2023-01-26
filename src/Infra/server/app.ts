import { v1Router } from '../api/v1';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import logger from '../utils/logger';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
require('dotenv').config();

const origin = {
  origin: '*',
};

const app = express();
process.on('uncaughtException', e => {
  // logger.error(e);
  console.log("Error uncaughtException app", e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(origin));
app.use(compression());
app.use(helmet());
app.use(morgan('combined'));
app.use('/api/v1', v1Router);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});
