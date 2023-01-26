// =================== REQUEST ===================
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

export interface Resp_RegiterPaymentTerbol {
  transactionNumber: number;
  commerceInfo: any;
}
export interface Resp_CancelPaymentTerbol {}
