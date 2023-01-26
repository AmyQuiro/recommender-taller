import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from './../../general/geneneralDTO';
// ============= REQUEST =============

// ============= RESPONSE =============
export interface ClientInfoDTO {
  code: string;
  firstName: string;
  lastName: string;
  fullName: string;
  idNumber: string;
  telephone: string;
  email: string;
}
export interface ClientContractsDTO {
  clientInfo: ClientInfoDTO;
  contracts: contractsDTO[];
  extraData?: string;
}

export interface contractsDTO {
  code: string;
  name: string;
  description: string;
  extraData?: string;
}

export interface FeeDTO {
  code: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  extraData?: string;
}
// ================== REGISTER PAYMENT  ==================
export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
  userApplication: string;
}
export interface RespRegisterPaymentContract {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

// ================== CANCEL PAYMENT  ==================
export interface CancelPaymentContract {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  extraData?: string;
  invoiceData?: any;
  transactionNumberCommerce?: string;
}

export interface RespCancelPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}
