import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

export interface respGeneral {
  return: number;
  mensaje: string;
}

// ================= CONTRACT =================
export interface Rep_GetContractsDTO {
  searchType: number;
  searchField: string;
}

export interface clientFortalezaDTO extends respGeneral {
  codCliente: number[];
  nomCliente: string[];
}

export interface polizaDto extends respGeneral {
  idePol: string[];
  poliza: string[];
  descPoliza: string[];
  cantDeudas: number[];
}

export interface deudaPolizaDTO extends respGeneral {
  Nombre: string;
  NombreFac: string;
  NitFac: string;
  Descripcion: string;
  poliza: string;
  moneda: string;
  tipoCambio: number;
  nro: string;
  ideFracc: number;
  ideFact: number;
  descripcionItem: string;
  montoBS: number;
  montoUs: number;
  tipDoc: string;
  correlativo: string;
}
export interface clientInfo {
  code: number;
  name: string;
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

export interface ExtraRegisterPayment {
  campus: number;
  isBillable: boolean;
  city_code: string;
  city_name: string;
  town_code: string;
  town_name: string;
  entity_code: string;
  entity_name: string;
  agency_code: string;
  agency_name: string;
  operator_code: string;
  operator_username: string;
  way_pay: string;
  note: string;
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
  invoiceCreated?: InvoiceCreatedData;
}
export interface InvoiceCreatedData {
  transactionNumber: number;
  control_code: string;
  authorization_number: string;
  deadline_date: Date;
  invoice_number: number;
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
