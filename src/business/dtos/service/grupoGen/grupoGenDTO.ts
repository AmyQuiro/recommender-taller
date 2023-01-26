import {
  BillingData,
  Infotransaction,
  ItemsToPay,
  PayerInfo,
} from '../../general/geneneralDTO';

// ================= CONTRACT =================
export interface Resp_GetContractParent<T> {
  cantidadRegistros: number;
  literalError: string;
  flagError: string;
  clienteData: T;
}

export interface Rep_GetContractsDTO {
  searchType: string;
  searchField: string;
}

export interface RespContractCommerce {
  cuentabanco: string;
  id_grupo: number;
  apellidos: any;
  empresa: number;
  localidad: string;
  lote: string;
  manzana: string;
  nomProyecto: string;
  nombre: string;
  nroCuenta: string;
  nroDocumento: string;
  proDocumento: string;
  proyecto: string;
  tipoCuenta: string;
  totalCuotas: number;
  uv: string;
  tipoCambio: number;
}

export interface ContractGrupoGen {
  code: string;
  name: string;
}

export interface CompanyInfo {
  codePlace: string;
  codeCompany: number;
  nameCompany: string;
}

// ================= FEE =================
export interface RespGetFeeParent {
  cantidadDeudas: number;
  data: FeeInfo[];
  flagError: string;
  literalError: string;
}

export interface FeeInfo {
  fechaVencimiento: number;
  moneda: number;
  montoTotal: number;
  nroCuota: number;
}

export interface Rep_GetFeeDTO {
  contractCode: string;
  extraData: string;
}

// ================= REGISTER PAYMENT =================

export enum enumTypeGrupoGen {
  RegistrarPago = 'P',
  AnularPago = 'R',
}
export interface ReqRegisterPayment {
  mupagntrn: string; //tipo de transacción P (pago), R (revertir)
  mupagempr: number; //Código de empresa.
  mupagloca: string; //Localidad de la empresa M o SC
  mupagnpre: string; //Numero de contrato o reserva
  mupagidpg: string; //Id pago proporcionado por la entidad multipago
  mupagcmon: number; //Tipo moneda 1 bolivianos, 2 dólares
  mupagtcam: number; //Tipo cambio dólar
  mupagndid: string; //Carnet de identidad cliente
  mupagexpd: string; //Lugar expedición del carnet de identidad
  mupagdpto: string; //Departamento de pago
  mupagciud: string; //Ciudad de pago
  mupagagen: string; //Código de agencia donde se realizo el pago
  mupagcopr: string; //Código de operador
  mupagfpag: number; //Fecha de pago
  mupaghora: number; //Hora de pago
  mupagtota: number; //cuotas en total a pagar
  mupagticu: string; //tipoCuenta C (contrato) o R (Reserva)
  mupagcuot: Mupagcuot[];
}

export interface Mupagcuot {
  mudpgimpt: number;
  mudpgncuo: number;
}

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
  userApplication: string;
}

export interface Resp_RegiterPaymentGrupoGen {
  flagError: string;
  literalError: string;
}
export interface CommerceInfoPayment {
  comerceTransaction: string;
  msg: string;
}
export interface CancelPaymentGrupoGen {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData?: string;
}

export interface RespCancelPaymentGrupoGen {
  Status: string;
  Message: string;
}

export interface RespCancelPaymentCommerce {
  Status: boolean;
  commerceInfo: any;
}
