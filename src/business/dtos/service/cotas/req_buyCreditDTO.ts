import { Infotransaction, Contract } from './general';
export interface Req_BuyCreditDTO {
  contrat: Contract;
  totalAmount: number;
  infotransaccion: Infotransaction;
}
