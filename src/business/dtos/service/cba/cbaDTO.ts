import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

// ================= GENERAL =================
export interface Resp_CBA<T> {
  code: number;
  msg: string;
  state: number;
  data: T;
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
  contracts: ContractCBA[];
}

export interface ContractCBA {
  code: string;
  name: string;
  amount: number;
  commerceInfo: CommerceInfo;
}

export interface CommerceInfo {
  nit: string;
  razonSocial: string;
}

// ================= FEE =================
export interface Rep_GetFeeDTO {
  contractCode: string;
}

export interface Resp_GetFeeCommerce {
  exchangeRate: number;
  fees: FeeCBA[];
}

export interface FeeCBA {
  code: number;
  name: string;
  amount: number;
  currency: string;
  originalAmount: number;
  dateToPay: Date;
  comerceInfo: ComerceInfo;
}

export interface ComerceInfo {
  detalleCantidad: number;
  ventaDescuento: number;
  ventaTotal: number;
}

// ================= REGISTER PAYMENT =================

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPaymentCBA {
  commerceInfo: CommerceInfoPayment;
  transactionNumber: number;
}
export interface CommerceInfoPayment {
  comerceTransaction: string;
  msg: string;
}

// ================= INVOICE =================

export interface CreateInvoiceCBA {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;

  userAplication: string;
  invoiceCreated?: InvoiceElectronicaCreatedData;
}
export interface InvoiceCreatedData {
  transactionNumber: number;
  control_code: string;
  authorization_number: string;
  deadline_date: Date;
  invoice_number: number;
}

export interface InvoiceElectronicaCreatedData {
  transactionNumber: number;
  control_code: string;
  cuf: string;
  invoice_number: number;
  invoice_date?: string;
}

export interface RegisterInvoiceCBA {
  factura: Factura[];
  venta: Venta[];
}

export interface Factura {
  rz_factura_pagos: string;
  nit_factura_pagos: string;
  nro_factura_pagos: string;
  cc_factura_pagos: string;
  nro_auto_pagos: string;
  monto_pagos: number;
  info: string;
}

export interface Venta {
  contractCode: string;
  transactionNumber: number;
}

// ================= CANCEL PAYMENT =================

export interface CancelPaymentCBA {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  contractCode: string;
  extraData?: string;
}

export interface RespCancelPaymentCBA {
  Status: string;
  Message: string;
}

export interface RespCancelPayment {
  Status: boolean;
  commerceInfo: CommerceInfoCancel;
  extraData?: string;
}
export interface CommerceInfoCancel {
  msg: string;
}
