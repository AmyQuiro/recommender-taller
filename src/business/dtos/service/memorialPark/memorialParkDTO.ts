import { string } from "joi";
import { BillingData, Infotransaction, ItemsToPay, PayerInfo } from "../../general/geneneralDTO";


export interface ResponseGeneral<T> {
    CodigoRespuesta: string;
    MensajeRespuesta: string;
    NroTransaccion: string;
    Data: T;
}

export interface ResponseGetContracts {
    CodigoRespuesta: string;
    MensajeRespuesta: string;
    NroTransaccion: string;
    Data: DataContract[];
}

export interface DataContract{
    id: string;
    nro_ci: string;
    nro_contrato: string;
    base: string;
    serie: string;
    sector: string;
    planimetria: string;
    nombrecliente: string;
    nro_nit: string;
    empresa: string;
    estado: string;
    user_modified: string;
}

export interface RequestContractDto {
    searchType: string;
    searchField: string;
}

// Cuotas
export interface RequestFeeDto{
    contractCode: string;
    extraData?: string;
}

export interface ResultFeeDto {
    ciCliente: string;
    nroContrato: string;
    nombreTitular: string;
    NitFactura: string;
    NombreFactura: string;
    Cuotas: FeeMPark[];
}

export interface FeeMPark {
    id: string;
    NroContrato: string;
    Base: string;
    Serie: string;
    NroCuota: string;
    TipoCuota: string;
    FechaCuota: string;
    Plazo: string;
    Moneda: string;
    TC: string;
    MontoTotal: number;
    MontoFiscal: number;
    Empresa: string;
    Estado: string;
    TipoDoc: string;
    NroFactura: string;
}

// registro de pago
export interface RegisterPaymentMpark {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface ResultPayment{
    Codigo: string;
    Mensaje: string;
    NroTransaccion: string;
    Data: []
}

// cancelar pago
export interface CancelPaymentMPark {
    transactionDate: string;
    reasonToCancel: string;
    contractCode: string;
    transactionNumberCommerce: string;
    user: string;
    extraData?: string;
  }