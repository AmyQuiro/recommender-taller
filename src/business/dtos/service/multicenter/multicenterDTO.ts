export interface APIResponse<t> {
  Status: boolean;
  Message: string;
  Data: t;
}

export interface Rep_GetDebtsDTO {
  ciCode: string;
}

export interface ResponseClient {
  mens: string;
  appa: string;
  apma: string;
  noms: string;
  totp: number;
  tota: number;
  totd: number;
  ifac: number;
  npet: number;
  error: number;
  msg: string;
}
// export interface Req_RegisterPaymentDTO {
//   clientCode: string;
//   totalAmount: number;
//   transactionNumber: number;
//   currency: string;
//   requestClientNumber: string;
//   extraData: string;
//   userAplication: string;
// }

export interface Req_RegisterPayment {
  npet: number;
  cloc: string;
  ftra: string;
  ndid: string;
  impt: number;
  mone: number;
  vcob: string;
  cmon: number;
  tipo: number;
  glos: string;
  nnit: string;
  nomb: string;
  tdoc: number;
  comp: string;
  emai: string;
}
export interface Resp_RegiterPaymentMult {
  error: number;
  msg: string;
  ntra: number;
}

export interface ExtraData {
  ci: string;
  npet: number;
  totp: number;
  tota: number;
  email?: string;
  complement?: string;
}
