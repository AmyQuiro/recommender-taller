//=================== GENERAL ===================

export interface InvoiceResponse<T> {
  codigo: number;
  mensaje: string;
  objeto: T;
}

//=================== TOKEN ===================
export interface ReqToken {
  userName: String;
  password: String;
}

export interface RespToken {
  CodigoActividadEconomica: number;
  EmpresaId: number;
  NIT: string;
  Estado: number;
  EstadoBoolean: boolean;
  UsuarioCreacion: number;
  UsuarioModificacion: number;
  FechaCreacion: string;
  FechaModificacion: string;
  TokenInicioSesion: string;
  IdAutorizacion: number;
}

//=================== GENERATE INVOICE ===================

export interface GenerateInvoiceDTO {
  IdPago: string;
  NroFacturaSistema: string;
  CodigoActividadEconomica: string;
  CodigoCaracteristica: string;
  CodigoClienteSistema: string;
  codigoSucursal: string;
  NITEmpresa: string;
  NombreCliente: string;
  CorreoCliente: string;
  TelefonoCliente: string;
  montoFactura: number;
  NITFactura: string;
  NombreFactura: string;
  Detalles: Detalle[];
  ImporteICE: number;
  ImporteExento: number;
  VentasGravadasTasaCero: number;
  Descuentos: number;
  tipoCambio: number;
  Moneda: string;
}

export interface Detalle {
  Descripcion: string;
  Precio: number;
  PrecioUnitario: number;
  cantidad: number;
  PrecioString: string;
}

export interface Resp_GenerateInvoiceDTO {
  Id: number;
  Numero: number;
  NumeroAutorizacion: string;
  CodigoSucursal: string;
  NitEmpresa: string;
  NroControl: string;
  Fecha: string;
  NitFactura: string;
  NombreFactura: string;
  MontoFacturaBs: number;
  Enviada: boolean;
  FechaCreacion: string;
  IdCliente: number;
  Token: string;
  IdPago: string;
  FechaLimiteEmision: string;
  Leyenda: string;
  Sucursaltexto: string;
  Empresatexto: string;
  Impreso: boolean;
}

export interface RespInvoice {
  Id: number;
  Numero: number;
  NumeroAutorizacion: string;
  CodigoSucursal: string;
  NitEmpresa: string;
  NroControl: string;
  Fecha: string;
  NitFactura: string;
  NombreFactura: string;
  MontoFacturaBs: number;
  Enviada: boolean;
  FechaCreacion: string;
  IdCliente: number;
  Token: string;
  IdPago: string;
  FechaLimiteEmision: string;
  Leyenda: string;
  Sucursaltexto: string;
  Empresatexto: string;
  Impreso: boolean;
}

//=================== INVOICE FILE ===================
export interface Req_InvoiceFile {
  token: String;
}

//=================== INVOICE JSON ===================
export interface Req_InvoiceJSON {
  token: String;
}
export interface Req_CancelInvoice {
  IdPago:        string;
  CodigoControl: string;
}
