import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

export interface Req_GetContractsDTO {
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
  contracts: ContractUrbCortez[];
  idContractResponse: number;
  // amount: number;
  commerceInfo?: CommerceInfo[];
}

export interface CommerceInfo {}

export interface ContractUrbCortez {
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
  fees: FeeUrbCortez[];
}

export interface FeeUrbCortez {
  codeCuota: number;
  name: string;
  amount: number;
  currency: string;
  fecha_orden: string;
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

export interface Resp_RegiterPayment_UrbCortez {
  Status: string;
  Message: string;
  transactionNumberPago: number;
}

//================ CANCEL PAYMENT ================

export interface RespCancelPayment_UrbCortez {
  Status: string;
  Message: string;
}

export interface RespCancelPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

//================ get company info ================
export interface ReqGetCompanyInfo {
  company: number;
}
