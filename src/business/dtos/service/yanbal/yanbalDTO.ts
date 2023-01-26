// ================== DEBTS  ==================

export interface resp_HeaderDto {
  codigoInterfaz: String;
  usuarioAplicacion: String;
  codigoAplicacion: String;
  codigoPais: String;
  codigoPaisOD: CodigoPaisOD[];
  idTransaccion: string;
}

export interface CodigoPaisOD {
  valor: string;
}

// export interface Req_registerPaymentDTO {
//   service_name: String;
//   data: DataRegisterPaymentDTO;
// }

// export interface DataRegisterPaymentDTO {
//   codConsultora: string;
//   tipoDocumento: string;
//   numDocumento: string;
//   fecTransaccion: string;
//   numCuenta: string;
//   canalRecaudo: string;
//   montoRecaudo: string;
//   codMoneda: string;
//   numOperacion: string;
//   usuarioAplicacion: string;
// }

export interface ExtraData_Debts {
  legend: string;
  consultantName: string;
  msgPayment: string;
  idTransaction: string;
  documentType: string;
  documentNumber: string;
  payChannel: string;
}
// ================== REGISTER PAYMENT  ==================

export interface ExtraData_RegisterPayment {
  operationalNumber: string;
}

// ================== CANCEL PAYMENT  ==================
export interface CancelPaymentYanbal {
  transactionNumber: string;
  reasonToCancel: string;
  user: string;
  transactionNumberCommerce: string;
  extraData?: string;
}

export interface ExtraData_CancelYanbal {
  consultantName: string;
  codConsultora: string;
  documentType: string;
  documentNumber: string;
  payChannel: string;
  totalAmount: number;
  currency: string;
}

// export interface RespCancelPaymentYanbal {
//   Status: string;
//   Message: string;
// }

// export interface RespCancelPaymentYanbal {
//   // idTransactionClient: string;
//   msgResponse: string;
//   extraData?: string;
// }
