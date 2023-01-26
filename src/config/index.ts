import { dbConfig } from './db';

const environment = process.env.NODE_ENV;
const publicPemDir = process.env.PUBLIC_PEM;
const privatePemDir = process.env.PRIVATE_PEM;

export { environment, dbConfig, privatePemDir, publicPemDir };
