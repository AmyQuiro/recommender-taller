import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

export interface Rep_GetContractsDTO {
  searchType: string;
  searchField: string;
}

export interface RespContractCommerce {
  clientName: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  celular: string;
  email: string;
  contracts: ContractUTB[];
  idContractResponse: number;
  // amount: number;
  commerceInfo?: CommerceInfo[];
}

export interface CommerceInfo {}

export interface ContractUTB {
  code: number;
  name: string;
  CommerceInfo?: any;
}

export interface Rep_GetFeeDTO {
  extraData: string;
  contractCode: string;
}
export interface Resp_GetFeeCommerce {
  Status: string;
  Message: string;
  fees: FeeUTB[];
}

export interface FeeUTB {
  codeCuota: number;
  name: string;
  amount: number;
  currency: string;
  fecha_orden: Date;
  obligatoriedad: number;
  commerceInfo: string;
}

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPaymentUtb {
  Status: string;
  Message: string;
  transactionNumberPago: number;
}
export interface CancelPaymentUTB {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
}

export interface RespCancelPaymentUTB {
  Status: string;
  Message: string;
}

export interface RespCancelPayment {
  msgResponse: string;
  extraData?: string;
}
