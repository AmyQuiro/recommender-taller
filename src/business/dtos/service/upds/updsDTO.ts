import { ItemsToPay, PayerInfo } from '../../flowType/debts/debtsDTO';
import { BillingData } from '../../general/geneneralDTO';
// =================== REQUEST ===================

// ======= CLIENT =======
export interface req_getTokenDTO {
  usuario: string;
  password: string;
}

export interface resp_getTokenUPDS {
  token: string;
  expiracion: Date;
}

// ======= GET DEBT =======
export interface Rep_GetDebtsDTO {
  ci: string;
  campus: number;
}

export interface ResponseClient_Commerce {
  id: number;
  periodoCobroDescripcion: string;
  documentoCliente: string;
  cliente: string;
  correoElectronico: string;
  celular: string;
  descripcion: string;
  nitCliente: number;
  razonSocial: string;
  facturable: boolean;
  fechaVencimiento: Date;
  deudaDetalles: DeudaDetalle[];
}

export interface DeudaDetalle {
  item: number;
  idServicio: number;
  descripcion: string;
  monto: number;
}

export interface DeudaDetalle {
  Item: number;
  IdServicio: number;
  Descripcion: string;
  Monto: number;
  IdPlanPago: number;
  NroCuotaPlan: number;
}

export interface ExtraData {
  htinroti: string;
  htifemic: string;
  htifvcto: string;
  htidvcto: number;
  htitneto: number;
  pagado: number;
  saldo: number;
  glosa: string;
}

export interface Resp_RegiterPaymentUPDS {
  codRespuesta: number;
  autorizacion: number;
}

// ======= facturar =======

export interface CreateInvoiceUPDS {
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

// ======= GET NIT =======
export interface Rep_GetNitDTO {
  ci: string;
  campus: number;
  debtCode: number;
}

export interface Resp_CancelPaymentUPDS {}

export interface ReqFacturar {
  transaccion: number;
  fecha: Date;
  codigoControl: string;
  nroAutorizacion: string;
  fechaLimiteDosificacion: Date;
  codigoFactura: number;
  nit: string;
  nombreCliente: string;
}

export interface RespFacturar {
  codRespuesta: number;
  autorizacion: number;
}
