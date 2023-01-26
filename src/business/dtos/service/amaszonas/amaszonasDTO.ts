// =================== REQUEST ===================
// ======= CLIENT =======
export interface Req_GetReserve {
  searchCriteria: number;
  searchField: string;
}

export interface ResponseAmaszonas {
  error: number;
  mensajeError: string;
  codPago: any;
}
export interface ResponseClientDebt {
  descripcionDeuda: string;
  montoTotalBs: number;
  montoTotalSus: number;
  rhp: number;
  Surename: string;
  GiveName: string;
  DocIDPax: string;
  nro: number;
  fechaHoraVuelo: string;
  ruta: string;
  NroVuelo: string;
}
