import { Client } from 'soap';
import { Contract } from './general';
export interface ResponseClient {
  Cliente: Client;
  Contratos: Contract[];
}
