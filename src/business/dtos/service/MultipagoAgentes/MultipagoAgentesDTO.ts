// =================== REQUEST ===================

export interface req_headerMpClientDTO {
  entity: string;
  userApp: string;
}
// ======= TOKEN =======
export interface req_getTokenDTO {
  provider: string;
  uid: string;
}

export interface resp_format<T> {
  status: number | string;
  message: string;
  data: T;
}
export interface SectionParent {
  sections: Section[];
}
export interface Section {
  sectionCode: string;
  flowType: number;
  name: string;
  tags: Tag[];
}

export interface Tag {
  tagCode: string;
  label: string;
  order: number;
  required: number;
  validation: Validation;
  dataType: string;
}

export interface Validation {
  isNumeric: number;
  isAlphanumeric: number;
  maximumQuantity: number;
  onlyLetters: string;
  specialCharacters: string;
}

// ======== CONTRACT =============

export interface RespContract {
  serviceCode: string;
  clientCi: number;
  clientName: string;
  transactionData: string;
  contracts: Contract[];
}

export interface Contract {
  code: string;
  type: string;
  name: string;
  description: string;
  extraData: any[];
}

export interface SelectedData {
  tagCode: string;
  value: string;
}

// ========= ITEMS TO PAY =============
export interface RespItemsToPay {
  contractCode: string;
  transactionData: string;
  items: Item[];
}

export interface Item {
  order: number;
  code: string;
  concept: string;
  expirationDate: string;
  amount: number;
  type: string;
  typeFlow: string;
  minimumAmount: number;
  commissionAmount: number;
  maximumQuatity: number;
}

// ======= CLIENT =======
export interface Rep_GetDebtsDTO {
  ciCode: string;
}

export interface ResponseClient_Commerce {
  clientName: string;
  debtDetail: string;
  amount: number;
  commerceInfo: CommerceInfo[];
  message: string;
}

export interface CommerceInfo {
  htinroti: string;
  htifemic: string;
  htifvcto: string;
  htidvcto: number;
  htitneto: number;
  htitpaga: number;
  htitsald: number;
  htiglosa: string;
  htitxcxc: string; // laboratorio
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

// =================== REGISTER PAYMENT ================

export interface ReqRegisterPaymentMA {
  idTransaction: number;
  paymentDate: Date;
  serviceCode: string;
  contractType: string;
  contractCode: string;
  totalAmount: number;
  paymentPlace: string;
  transactionData: string;
  paymentDetails: PaymentDetail[];
  selectedData: SelectedData[];
  extraData: string;
}

export interface PaymentDetail {
  code: string;
  type: string;
  quantiy: number;
  amount: number;
}

export interface SelectedData {
  tagCode: string;
  value: string;
}

export interface Resp_RegiterPaymentMA {
  transactionNumber: number;
  commerceInfo: any;
}

// =================== CANCEL ================

export interface Resp_CancelPaymentTerbol {}
