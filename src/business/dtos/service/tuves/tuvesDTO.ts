import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

// ================= GENERAL =================
export interface Resp_Tuves<T> {
  code: number;
  msj: string;
  state: number;
  CommerceInfo: T;
}
// ================= CONTRACT =================
export interface Rep_GetContractsDTO {
  searchType: string;
  searchField: string;
}

export interface RespContractCommerce {
  clientFirstName: string;
  clientLastName: string;
  clientCI: string;
  telephoneNumber: string;
  email: string;
  contracts: ContractTuves[];
}

export interface ContractTuves {
  code: string;
  name: string;
}

// ================= FEE =================
export interface Rep_GetFeeDTO {
  contractCode: string;
  commerceInfo: string;
}

export interface Resp_GetFeeCommerce {
  exchangeRate: number;
  fees: FeeTuves[];
}

export interface FeeTuves {
  code: number;
  name: string;
  amount: number;
  currency: string;
  originalAmount: number;
  dateToPay: Date;
  comerceInfo: any;
}

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPaymentTuves {
  commerceInfo: CommerceInfoPayment;
  transactionNumber: number;
}
export interface CommerceInfoPayment {
  comerceTransaction: string;
  msg: string;
}
export interface CancelPaymentTuves {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData?: string;
}

export interface RespCancelPaymentTuves {
  Status: string;
  Message: string;
}

export interface RespCancelPaymentCommerce {
  Status: boolean;
  commerceInfo: any;
}

// ================= INVOICE =================
export interface reqGetInvoice {
  transactionNumber: number;
  idTransactionClient: number;
}
export interface respInvoicePDF {
  document: string;
}

export interface respInvoiceJSON {
  type: string;
  title: string;
  emitter_name: string;
  emitter_nit: string;
  economic_activity: string;
  central_branch_number: string;
  central_branch_name: string;
  central_branch_address: string;
  central_branch_phone: string;
  central_branch_place: string;
  receiver_name: string;
  receiver_nit: number;
  invoice_number: number;
  authorization_number: string;
  date: Date;
  total_amount: string;
  literal_total_amount: string;
  control_code: string;
  deadline_date: Date;
  qr: string;
  general_legend: string;
  law_legend: string;
  another_legend: string;
  item: Item[];
}

export interface Item {
  concept: string;
  amount: string;
}
