import {
    BillingData,
    Infotransaction,
    ItemsToPay,
    PayerInfo,
  } from '../../general/geneneralDTO';
  
  export interface Resp_Triplex<T> {
    totalRowCount: number;
    pageSize: number;
    pageIndex: number;
    rowCount: number;
    rest_contratos: any;
    rest_cuotas: any;
  }
  

  export interface resp_format<T> {
    status: number | string;
    message: string;
    data: T;
    // data: RespGetToken;
  }

  export interface RespGetToken {
    token: string;
  }

  // ================= CONTRACT ================= //
  export interface Rep_GetContractsDTO {
    searchType: number;
    searchField: string;
  }
  export interface Rep_GetContractsByCodeDTO {
    searchType: number;
    searchField: number;
  }
  export interface RespContractCommerce {
    codigoCliente: number;
    numeroDocumento: string;
    nombre: string;
    direccion: string;
  }
  
  // ================= FEE ================= //
  
  export interface Rep_GetFeeDTO {
    contractCode: string;
  }
  export interface Resp_GetFeeCommerce {
    codigoCxC: number;
    estado: string;
    codigoCliente: number;
    fechaRegistro: string;
    diasPlazo: number;
    periodoPago: number;
    montoCreditoSus: number;
    montoCreditoBs: number;
    montoAmortizadoSus: number;
    montoAmortizadoBs: number;
    saldoPendienteSus: number;
    saldoPendienteBs: number;
    mporteInteresDevengadoSus: number;
    mporteInteresDevengadoBs: number;
    montoCargoSus: number;
    montoCargoBs: number;
    tasaInteresMensual: number;
    glosa: number;
    diasGraciasCobroInteres: number;
    fechaUltimoCobroInteres: string;
    fechaVencimientoCredito: string;
  }
  export interface Resp_GetItemsCommerce {
    codigoCxC: number;
    numeroCuota: number;
    fechaVencimiento: string;
    importeCuotaSus: number;
    importeCuotaBs: number;
    importePagadoSus: number;
    importePagadoBs: number;
    saldoPendienteSus: number;
    saldoPendienteBs: number;
    interesFijoSus: number;
    interesFijoBs: number;
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
  
  export interface Resp_RegiterPaymentTriplex {
    ok: boolean;
    Msg: string;
    response: string;
  }
  
  export interface CancelPaymentTriplex {
    transactionNumber: string;
    reasonToCancel: string;
    user: string;
    transactionNumberCommerce: string;
    extraData: string;
  }
  