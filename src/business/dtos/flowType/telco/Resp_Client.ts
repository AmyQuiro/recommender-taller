import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';
import { FeeDTO } from '../contracts/contractsDTO';

export interface getClientDTO {
  searchType: string;
  searchField: string;
  extraData?:string;
}

export interface Resp_Client {
  fullName: string;
  ciNit: string;
  clientCode: string;
  contracts: Resp_Contract[];

  extraData: string;
}

export interface Resp_Client_Fees {
  fullName: string;
  ciNit: string;
  clientCode: string;
  fees: FeeDTO[];
  extraData: string;
}
export interface Resp_Contract {
  code: string;
  name: string;
  description: string;
  actions: Resp_Action[];
  extraData: string;
}

export interface Resp_Action {
  code: string;
  name: string;
}

export interface Resp_Package {
  code: number;
  category: string;
  plan: string;
  description: string;
  price: number;
  currency: string;
  validety: string;
  item: string;
}

export interface RegisterPayment_Postpago {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface RespRegisterPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}
