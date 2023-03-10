import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

// ================= GENERAL =================
export interface ResponseService<T> {
  mensaje_respuesta: string;
  codigo_respuesta: string;
  datos: T;
}

// ================= TOKEN =================
export interface TokenExperied {
  value: string;
  date: Date;
}

// ================= CONTRACT =================

export interface Rep_GetContractsDTO {
  searchType: string;
  searchField: string;
}

export interface Resp_Contract {
  Cedula: string;
  Cliente: string;
  Codigo_Contrato: string;
  Nombre: string;
  Descripcion: string;
}

// ================= FEE =================
export interface Req_GetFeeDTO {
  contractCode: string;
  extraData: string;
}
export interface Resp_getFee {
  Cliente: string;
  Descripcion: string;
  IDPlanPago: string;
  Cuota: string;
  Moneda: string;
  Importe: string;
  Fecha_Vencimiento: string;
  Saldo: string;
  Multa: string;
  Importe_Original: string;
}

// ================= REGISTER PAYMENT =================

export interface RegisterPaymentResponseTerreno {
  IDRecibo: string;
  NumRecibo: string;
  Creadopor: string;
  FechaRecibo: string;
  FormaPago: string;
  Lote: string;
  Cedula: string;
  Cliente: string;
  FechaVencimiento: string;
  NumCuota: string;
  TotalCuota: string;
  CanceladoCuota: string;
  SaldoCuota: string;
  TotalDeudaContrato: string;
  TotalCanceladoContrato: string;
  TotalAdeudado: string;
  TotalNumCuotas: string;
  MontoPorMulta: string;
}

export interface CancelPaymentGrupoGen {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData?: string;
}

// Generated by https://quicktype.io

export interface RespCancelTerreno {
  codigo_respuesta: string;
  mensaje_respuesta: string;
  datos: string;
}

export interface RespCancelPaymentGrupoGen {
  Status: string;
  Message: string;
}

export interface RespCancelPaymentCommerce {
  Status: boolean;
  commerceInfo: any;
}

// ================= INVOICE =================

export interface CreateInvoiceTerreno {
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
