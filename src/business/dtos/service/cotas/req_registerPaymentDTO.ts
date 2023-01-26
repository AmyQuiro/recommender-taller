export interface Req_registerPaymentDTO {
  service_name: String;
  data: IDataRegisterPayment;
}

export interface IDataRegisterPayment {
  codConsultora: string;
  tipoDocumento: string;
  numDocumento: string;
  fecTransaccion: string;
  numCuenta: string;
  canalRecaudo: string;
  montoRecaudo: string;
  codMoneda: string;
}
