import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

export interface Resp_TiendaCelina<T> {
  totalRowCount: number;
  pageSize: number;
  pageIndex: number;
  rowCount: number;
  rest_contratos: any;
  rest_cuotas: any;
}

// ================= CONTRACT ================= //

export interface Rep_GetContractsDTO {
  searchType: number;
  searchField: string;
}

export interface RespContractCommerce {
  Sociedad: string;
  CodigoCliente: string;
  NIT: string;
  Nombre: string;
  Apellidos: string;
  Telefono: string;
  CodigoContrato: string;
  NombreContrato: string;
}

// ================= FEE ================= //

export interface Rep_GetFeeDTO {
  contractCode: string;
}

export interface Resp_GetFeeCommerce {
  totalRowCount: number;
  pageSize: number;
  pageIndex: number;
  rowCount: number;
  rest_cuotas: FeeTiendaCelina[];
}

export interface FeeTiendaCelina {
  Sociedad: string;
  CodigoContrato: string;
  exchangeRate: string;
  CodigoCuota: string;
  NombreCuota: string;
  ImporteCuota: string;
  Moneda: string;
  ImporteOriginal: string;
  Vencimiento: string;
  Multa?: string;
}

// ================= REGISTER PAYMENT =================//

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPaymentTiendaCelina {
  ok: boolean;
  Msg: string;
  response: string;
}

export interface CancelPaymentTiendaCelina {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData: string;
}
