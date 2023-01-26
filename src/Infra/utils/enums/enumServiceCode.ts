export enum enumServiceCode {
  Yanbal = 'YANBAL_COLLECTIONS',
  YanbalEcommerce = 'YANBAL_ECOMMERCE',
  Cotas = 'COTAS_PAYMENT',
  Multicenter = 'MULTICENTER_COBROS_SISCRED',
  EaglesSchool = 'EAGLES_SCHOOL',
  Terbol = 'TERBOL_PAYMENT',
  Amaszonas = 'AMASZONAS_PAYMENT',
  AmaszonasOK = 'AMASZONAS_OK_PAYMENT',
  UTB = 'UTB_PAYMENT',
  NacionalVida = 'NACIONAL_VIDA_PAYMENT',
  UrbCortez = 'URB_CORTEZ_PAYMENT',
  UrbTerracor = 'URB_TERRACOR_PAYMENT',
  Upds = 'UPDS_PAYMENT',
  TiendaAmiga = 'TIENDA_AMIGA_PAYMENT',
  MultipagoAgentes = 'MULTIPAGO_AGENTES',
  CBA = 'CBA_PAYMENT',
  ALIANZA = 'ALIANZA_PAYMENT',
  TUVES = 'TUVES_PAYMENT',
  NATURA = 'NATURA_PAYMENT',
  AZZORTI = 'AZZORTI_PAYMENT',
  ITDS = 'ITDS_PAYMENT',
  UNIVALLE = 'UNIVALLE_PAYMENT',
  GrupoGen = 'MI_LOTE_PAYMENT',
  Villarreal = 'NM_INVERSIONES_PAYMENT',
  TiendaCelina = 'TIENDA_CELINA_PAYMENT',
  NacionalSegurosCuidaMed = 'NACIONAL_SEGUROS_CUIDAMED_PAYMENT',
  Blooming = 'SCB',
  Guabira = 'SCG',
  Oriente = 'SCOP',
  Fortaleza = 'FORTALEZA_PAYMENT',
  TicketegEvents = 'TICKETEG_EVENTS',
  PuertoSantaCruz = 'PUERTO_SANTA_CRUZ_PAYMENT',
  Camsa = 'CAMSA_PAYMENT',
  Triplex = 'TRIPLEX_PAYMENT',
  BrisasDePaz = 'BRISAS_DE_PAZ_PAYMENT',
  Celina = 'CELINA_PAYMENT',
  Jupia = 'LA_JUPIA_PAYMENT',
  RaccoBolivia = 'RACCO_BOLIVIA_PAYMENT',
  Terreno = 'TERRENO_PAYMENT',
  Nuevatel = 'NUEVATEL_PAYMENT',
  NuevatelEquipoCredito = 'NUEVATEL_EQUIPOS_CREDITO_PAYMENT',
  LosPinos = 'LOS_PINOS_PAYMENT',
  TicketegService = 'TICKETEG_PAYMENT',
  MemorialPark = 'MEMORIAL_PARK_PAYMENT',
  LaVitalicia = 'LA_VITALICIA_PAYMENT',
  Saguapac = 'SAGUAPAC_PAYMENT',
  Tupperware = 'TUPPERWARE_PAYMENT',
  PagoFacil = 'PAGO_FACIL_PAYMENT',
  UrbLasLomas = 'URB_LAS_LOMAS',
}

export enum enumServiceTypeCode {
  DebtsPayment = 'debts_payment',
  TelcoPayment = 'telco',
  Contrato = 'Contrato',
  Reserva = 'Reserva',
  Colegio = 'Colegio',
}
export enum enumCurrency {
  BOB = 'Bs',
  USD = '$us',
}

export enum enumPayChannel {
  PRESENCIAL = 1,
  TIGOMONEY = 2,
  PAYME = 3,
  CYBERSOURCE = 4,
  QR = 5,
  TIGOMONEY_PUNTOFISICO = 6,
  VOUCHER = 7,
  BCP_BANK = 8,
  GANADERO_BANK = 9,
  PAYMENT_ON_DELIVERY_CASH = 10,
  PAYMENT_ON_DELIVERY_TIGO_MONEY = 11,
  PAYMENT_ON_DELIVERY_QR = 12,
  PAYMENT_ON_DELIVERY_POS = 13,
  BCP_SOLI_TARJETA = 14,
  SOLIBCP_BILLETERA = 15,
}

export enum enumAlianza {
  AlianzaVida = 'ALIANZA_VIDA',
  AlianzaGenerales = 'ALIANZA_GENERALES',
  AlianzaVidaLargoPlazo = 'ALIANZA_VIDA_LARGO',
}

export enum enumServiceIntegrationFeeType {
  general = 1,
  tipo2 = 2,
}
export enum feeTypeFlow {
  PagarMontoEspecifico = 'PME', // YANBAL - Introduce un monto a pagar
  MultiploSeleccionableSecuencial = 'MSS', // CELINA - Selecciona una cuota, la selección es secuencial
  MultipleModificableVariable = 'MMV', // EVENTOS - Selección de cantidades
  SeleccionarUnaOpcion = 'SUO', // COTAS - Selecciona una cuota, sin que sea secuencial
}

export enum enumPayChannelGTWP {
  CODE_QR = 'bcp_qr',
  CODE_TIGO_MONEY = 'tigo_money',
  CODE_TARJETA = 'cyber_source',
  CODE_MULTIPAGO = 'presencial',
  CODE_QR_CONTRA_ENTREGA = 'pago_contra_entrega_qr',
}

export enum enumMpagoDepartment {
  Santa_Cruz = 1,
  Cochabamba = 2,
  La_Paz = 3,
  Tarija = 4,
  Chuquisaca = 5,
  Oruro = 6,
  Potosi = 7,
  Beni = 8,
  Pando = 9,
}
