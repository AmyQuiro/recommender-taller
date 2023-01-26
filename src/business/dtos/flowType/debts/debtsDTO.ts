// ================== DEBTS  ==================
export interface Req_GetDebtsDTO {
  ciCode: string;
  userAplication: string;
}

export interface ClientDebts {
  clientCode: string;
  clientFirstName: string;
  clientLastName: string;
  clientFullName: string;
  clientIdNumber: string;
  clientEmail?: string;
  clientPhone: string;
  debts: DebtsDTO[];
  extraData?: string;
}

export interface DebtsDTO {
  code?: number;
  concept?: string;
  totalAmount: number;
  expirationDate?: string;
  currencyCode: string;
  extraData?: string;
}

// ================== REGISTER PAYMENT  ==================

export interface RegisterPaymentDebts {
  clientCode: string;
  totalAmount: number;
  transactionNumber: number;
  currency: string;
  requestClientNumber?: number; // Número de petición del comercio cliente
  userAplication: string;
  billingData?: BillingData;
  concept: string;
  debts?: ItemsToPay[]; // este debería de ser obligatorio
  payer: PayerInfo;
  extraData?: string;
}

export interface BillingData {
  document_type?: string;
  nit: string;
  bussines_name: string;
}
export interface ItemsToPay {
  code: string;
  currency: string;
  description: string;
  amount: number;
  extraData?: string;
}

export interface RespRegisterPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

export interface PayerInfo {
  name: string;
  idNumber: string;
  phone: string;
  email: string;
}

// ================== CANCEL PAYMENT  ==================

export interface CancelPaymentDebts {
  transactionNumber: string;
  transactionCommerce?: string;
  reasonToCancel: string;
  user: string;
  extraData?: string;
}
export interface RespCancelPayment {
  // idTransactionClient: string;
  idTransactionClient?: string;
  msgResponse: string;
  extraData?: string;
}
