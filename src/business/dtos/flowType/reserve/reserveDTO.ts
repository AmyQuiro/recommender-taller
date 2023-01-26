import { BillingData, ItemsToPay, PayerInfo } from '../../general/geneneralDTO';

// ================== Reserve  ==================
export interface ReserveInfoDTO {
  client: ClientInfo;
  items: ReserveDetailsDTO[];
  extraData?: string;
}

export interface ReserveDetailsDTO {
  code: string;
  concept: string;
  quantity: number;
  amount: number;
  currencyCode: string;
  extraData?: string;
}

export interface ClientInfo {
  clientCode: string;
  firstName: string;
  lastName: string;
  ci: string;
  email: string;
  telephone: string;
}

// ================== REGISTER PAYMENT  ==================

export interface RegisterPaymentReserve {
  payer: PayerInfo;
  items: ItemsToPay[];
  billingData?: BillingData;

  reserveCode: string;
  transactionNumber: number;
  totalAmount: number;
  currency: string;
  userAplication: string;
  payChannel: number;
  extraData?: string;
}

export interface RespRegisterPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

// ================== CANCEL PAYMENT  ==================

export interface CancelPaymentDebts {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  extraData?: string;
}
export interface RespCancelPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}
