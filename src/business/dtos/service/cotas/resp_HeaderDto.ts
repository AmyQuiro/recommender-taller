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
