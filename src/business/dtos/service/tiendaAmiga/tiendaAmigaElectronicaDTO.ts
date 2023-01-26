import { ItemElectronica } from "../../invoice/electronica/invoiceElectronicaDTO";

export interface CreateInvoiceData {
  dataCommerce: DataCommerce;
  payment: PaymentElectronica;
  totalAmountLate: number;
  items: Item[];
  transactionCommision: boolean;
  commision: Commision[];
  transactionCommission: string;
}

export interface RespContractCommerceElectronica {
  responseCode: string;
  message: string;
  credits: CreditList[];
}

export interface CreditList {
  customerName: string;
  creditId: string;
  creditDescription: string;
}


export interface Resp_GetFeeCommerceElectronica {
  customerName: string;
  customerId: string;
  installments: FeeTiendaAmiga[];
  responseCode: string;
  message: string;
}


export interface FeeTiendaAmiga {
  installmentId: string;
  description: string;
  creditId: string;
  invoiceNumber: string;
  installmentNumber: string;
  installmentDescription: string;
  installmentAmount: string;
  currency: string;
  expirationDate: string;
  daysOnDefault: string;
  defaultedAmount: string;
}

export interface Resp_RegiterPaymentTiendaAmigaElectronica {
  responseCode: string;
  message: string;
  data: responseDataInvoice;
}

export interface responseDataInvoice{
  invoice: {
  cuf: string;
  invoiceNumber: number;
  invoiceDate: string;
  billingEntity: string;
  amount: string;
  taxableAmount: string;
  giftCardAmount: string;
  discountAmount: string;
  legend: string;
  qr: string;
  details: DetailsResponse[];
  }
}

export interface DetailsResponse {
  sku: string;
  description: string;
  quantity: string;
  price: string;
  discountAmount: string;
  subTotal: string;

}


export interface Commision {
  description: string;
  amount: string;
}

export interface DataCommerce {
  idFactura: string;
  referencia: string;
  nit: string;
  razonSocial: string;
  moneda: string;
  codigoControl: string;
  numeroFactura: string;
  numeroAutorizacion: string;
  fechaLimite: string;
  detalle: Detalle[];
}

export interface Detalle {
  deudaId: string;
  importe: number;
  importeMora: number;
}

export interface Item {
  description: string;
  amount: number;
}

export interface PaymentElectronica {
  code: string;
  idContractResponse: string;
  payer: PayerElectronica;
  paymentDetails: Detalle[];
  transaction_number: string;
  status_order: string;
  channel_pay: string;
  pay_order_number: string;
  extraData: ExtraData;
}

export interface ExtraData {
  contractId: string;
  totalAmountLate: string;
  billingDataCommerce: BillingDataCommerce;
  transactionCommision: boolean;
}

export interface BillingDataCommerce {
  bussines_name: string;
  nit: string;
}

export interface PayerElectronica {
  name: string;
  idNumber: string;
  NIT: string;
  nombre_factura: string;
  amount_total: number;
  phone: string;
  email: string;
}
