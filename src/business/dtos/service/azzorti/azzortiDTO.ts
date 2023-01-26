// =================== REQUEST ===================
// ======= CLIENT =======
export interface Rep_GetDebtsDTO {
  ci: string;
  commerceInfo: any;
  usuarioAplicacion: string;
}

export interface ResponseClient_Commerce {
  firstName: string;
  lastName: string;
  debtDetail: DebtDetail[];
  commerceInfo: string;
  codigo_respuesta: string;
  msj: string;
}

export interface DebtDetail {
  code: string;
  concept: string;
  amount: string;
  commerceInfo: string;
  clientCode: number;
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

export interface Resp_RegiterPaymentAzzorti {
  transactionNumber: number;
  commerceInfo: any;
}
export interface Resp_CancelPaymentTerbol {}
