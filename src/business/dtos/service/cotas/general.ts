export interface Client {
  CodigoCliente: number;
  NombreCompleto: string;
  CiNit: string;
}

export interface Contract {
  NroContrato: string;
  CodigoEstado: string;
  Estado: string;
  CodigoTipoContrato: string;
  TipoContrato: string;
  CodigoServicio: string;
  Servicio: string;
  Direccion: string;
  NroContratoPago: string;
  accionescobranzas: ContractActions[];
}

export interface ContractActions {
  CodigoAccion: string;
  Descripcion: string;
}

export interface Infotransaction {
  payChannel: number;
  internalReferenceID: string;
  externalReferenceID: string;
  MedioTransaccion: string;
}

export interface PackageLTE {
  CodigoPaquete: number;
  Categoria: string;
  Plan: string;
  Descripcion: string;
  Precio: number;
  Moneda: string;
  VigenciaPaquete: string;
  Item: string;
  FechaInicioComercializacion: string;
  FechaFinalComercializacion: string;
}
