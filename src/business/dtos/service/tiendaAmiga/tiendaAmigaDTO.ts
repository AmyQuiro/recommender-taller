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
  facturas: any;
  nombreCliente: string;
  idFactura: string;
  productos: any;
  codigoRespuesta: string;
  mensajeRespuesta: string;
  // ap_materno: string;
  // celular: string;
  // email: string;
  // contracts: ContractTiendaAmiga[];
  // idContractResponse: number;
  // amount: number;
  // commerceInfo?: CommerceInfo[];
}

export interface CommerceInfo {}

export interface ContractTiendaAmiga {
  code: number;
  name: string;
  CommerceInfo?: any;
}

export interface Rep_GetFeeDTO {
  extraData: string;
  contractCode: string;
}
export interface Resp_GetFeeCommerce {
  nombreCliente: string;
  ci: string;
  datos: FeeTiendaAmiga[];
  codigoRespuesta: string;
  mensajeRespuesta: string;
}

export interface FeeTiendaAmiga {
  deudaID: number;
  descripcion: string;
  idFactura: string;
  factura: string;
  cuota: Date;
  periodo: number;
  importe: string;
  moneda: string;
  vencimiento: string;
  diasMora: string;
  importeMora: string;
}

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPaymentTiendaAmiga {
  codigoRespuesta: string;
  mensajeRespuesta: string;
  autorizacion: number;
  invoiceData: string;
  invoiceCommission: string;
}
export interface CancelPaymentTiendaAmiga {
  transactionNumber: string;
  transactionNumberCommission: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData: string;
}

export interface CancelInvoiceMultipago {
  transactionNumberCommission: string;
  reasonToCancel: string;
  user: string;
  extraData: string;
}


export interface RespCancelPaymentTiendaAmiga {
  codigoRespuesta: string;
  messageRespuesta: string;
}

export interface RespCancelPayment {
  // idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

// ======= facturar =======

export interface CreateInvoiceTiendaAmiga {
  clientCode: string;
  totalAmount: number;
  transactionNumber: number;
  currency: string;
  userAplication: string;
  billingData: BillingData;
  concept: string;
  debts: ItemsToPay[];
  payer: PayerInfo;
  extraData: string;
  invoiceCreated?: InvoiceCreatedData;
}
export interface InvoiceCreatedData {
  transactionNumber: number;
  control_code: string;
  authorization_number: string;
  deadline_date: Date;
  invoice_number: number;
}
