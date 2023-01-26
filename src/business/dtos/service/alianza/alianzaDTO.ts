import { string } from 'joi';
import {
  BillingData,
  Infotransaction,
  // ItemsToPay,
} from '../../general/geneneralDTO';
import { ItemsToPay, PayerInfo } from '../../flowType/debts/debtsDTO';

export interface Req_GetContractsDTO {
  searchType: number;
  searchField: string;
  extraData: string;
}
export interface RespAlianzaService<T> {
  Data: ResponseService<T>;
}
export interface ResponseService<T> {
  errorData: ErrorData;
  requestData: T;
}
export interface ErrorData {
  ncode: number;
  sdesc: string;
}
// =================== GET CLIENT ===================

export interface RespGetClientByID {
  sClient: string;
  dBirthdat: Date;
  sCliename: string;
  sFirstname: string;
  sLastname: string;
  sSexclien: string;
  sDescSex: string;
  sCuit: string;
  sClienameInv: string;
  sNitInv: string;
  sTypeDocNIT: null;
  sEmailInvoice: string;
  sPhoneInvoice: string;
}

export interface RespGetClienteCommerce {
  ROOT: ClientRoot;
}

export interface ClientRoot {
  '-sError': string;
  '-nFilas': string;
  NewDataSet: NewDataSet;
}

export interface NewDataSet {
  reaFindClient: ReaFindClient;
}

export interface ReaFindClient {
  sClient: string;
  dBirthdat: Date;
  sCliename: string;
  sFirstname: string;
  sLastname: string;
  sSexclien: string;
  DescSex: string;
  sCuit: string;
  sCollectInvoice: string; // Eliminar
}

// =================== GET FEE ===================

export interface RespGetFeeCommerce {
  ROOT: RootFee;
}
export interface RootFee {
  '-sError': string;
  '-nFilas': string;
  NewDataSet: ContainerFee;
}

export interface ContainerFee {
  reaClientRemindersNet: ReaClientRemindersNet[];
}

export interface ReaClientRemindersNet {
  nBranch: number;
  sBranch: string;
  nPolicy: number;
  sClient: string;
  sCliename: string;
  nPremium: number;
  nReceipt: number;
  nOffice: number;
  sOffice: string;
  nContrat: number;
  nDraft: number;
  dExpirdatP: Date;
  dStartdateP: Date;
  sCurrency: string;
  nCurrency: number;
  nBalanceCC: number;
  sTaxed: string;
  sBranch_Short: null;
  sMessage: string;
  nExchange: number;
  nType: number;
  nCountPend: number;
  nCodSIN: number;
  sDesCodSIN: string;
}

// =================== REGISTER PAYMENT ===================
export interface ItemToPay {
  sClient: string;
  nPremium: number;
  nReceipt: string;
  nContrat: string;
  nUser: string;
  nDraft: string;
  sPayCC: number;
  nType: number;

  sClientInvoice?: string;
  sNIT?: string;
}

export interface RespRegisterPaymentAlianza {
  nBordereaux: string;
  nReceipt: number;
  nDraft: number;
  dEffecdate: Date;
  nAmount: number;
  sBranch: string;
  dExpirdat: Date;
  sIntermed: string;
  sCurrency: string;
  sClientCon: string;
  sClienameCon: string;
  sCod_Authoriz: string;
  dCollect: Date;
  nRel_amoun: number;
  nExchange: number;
  nMov: number;
  nInvoice: number;

  nTypeRep: number;
  sId_process: string;
  nIndBilling: number;
  nPointInv: number;

  // Invoice data
  sIdentifier?: string;
  sTransaction?: string;
  sClientInvoice?: string;
  sNitInvoice?: string;
  sUrl?: string;

  // Multipago
  document_number: number; // utilizado para el numero de la factura y recibo
}

// =================== GET CONTRACT ===================
export interface RespContractCommerce {
  clientName: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  celular: string;
  email: string;
  contracts: ContractUrbCortez[];
  idContractResponse: number;
  // amount: number;
  commerceInfo?: CommerceInfo[];
}

export interface CommerceInfo {}

export interface ContractUrbCortez {
  code: number;
  name: string;
  CommerceInfo?: any;
}

export interface Rep_GetFeeDTO {
  extraData: string;
  contractCode: string;
}
export interface Resp_GetFeeCommerce {
  Status: string;
  Message: string;
  fees: FeeUrbCortez[];
}

export interface FeeUrbCortez {
  codeCuota: number;
  name: string;
  amount: number;
  currency: string;
  fecha_orden: string;
  obligatoriedad: number;
  commerceInfo: string;
}

export interface RegisterPaymentContract {
  payer: PayerInfo;
  billingData: BillingData;
  items: ItemsToPay[];
  infoTransaction: Infotransaction;
  total_amount: number;
  extraData?: string;
}

export interface Resp_RegiterPayment_UrbCortez {
  Status: string;
  Message: string;
  transactionNumberPago: number;
}

//================ CANCEL PAYMENT ================

export interface RespCancelPayment_UrbCortez {
  Status: string;
  Message: string;
}

export interface RespCancelPayment {
  idTransactionClient: string;
  msgResponse: string;
  extraData?: string;
}

//================ get company info ================
export interface ReqGetCompanyInfo {
  company: number;
}

// ======= facturar =======

export interface CreateInvoice {
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
  dosificacion: string;
  total_amount: number;
  transactionCommerceNumber: number;
  sCod_Authoriz: string;
  sCodAuthoriza: string;
}
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

// ALIANZA LARGO PLAZO

export interface ClientFromLargoPlazo {
  sClient: string;
  dBirthdat: string;
  sCliename: string;
  sFirstname: string;
  sLastname: string;
  PER_SEXO: string;
  sSexclien: string;
  DescSex: string;
  sCuit: string;
  sCollectInvoice?: string;
}
export interface PolizaFromLargoPlazo {
  nBranch: string;
  sBranch: string;
  nPolicy: string;
  sClient: string;
  sCliename: string;
  nPremium: string;
  nReceipt: string;
  sOffice: string;
  nContrat: string;
  nDraft: string;
  dExpirdatP: string;
  dStartdateP: string;
  sCurrency: string;
  nCurrency: string;
  nBalanceCC: string;
  sTaxed: string;
  sMessage: null;
  nExchange: string;
  nOffice: string;
}

export interface RegisterPaymentVLPResponse {
  nBordereaux: string;
  nReceipt: string;
  nDraft: string;
  dEffecdate: Date;
  nAmount: string;
  sBranch: string;
  dExpirdat: Date;
  sIntermed: string;
  sCurrency: string;
  sClientCon: string;
  sClienameCon: string;
  sCodAutoriza: string;
  dCollect: Date;
  nReal_Amount: string;
  nExchange: string;
  nMov: string;

  sCod_Authoriz: string;
}

export interface InvoiceCreatedDataLP {
  sCodAuthoriza: any;
  transactionNumber: number;
  control_code: string;
  authorization_number: string;
  deadline_date: Date;
  invoice_number: number;
  dosificacion: string;
  total_amount: number;
  transactionCommerceNumber: number;
  sCodAutoriza: string;
}
