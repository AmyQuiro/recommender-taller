export enum enumServiceIntegrationCode {
  Yanbal = 'SYP',
  TiendaCelina = 'TC',
  Fortaleza = 'FLZ',
  Natura = 'SNP',
  Azzorti = 'SAP',
  Multicenter = 'MLT',
  MulticenterTM = 'MLTTM',
}

export enum enumSectionsTypeFlow {
  FLOWTYPE_SEARCH = 1,
  FLOWTYPE_PAYMENT = 0,
}

export enum enumSectionsTags {
  SEARCH = 'SEARCH',
  PAYMENT = 'PAYMENT',
  RESERVE = 'RESERVE',
}

export enum enumTagSearch {
  search_ci = 'sCi',
  search_codCliente = 'sCodCli',
  search_codReserva = 'sCodRes',
  search_type = 'sTypSea',
}

export enum enumTagForm {
  form_first_name = 'fName',
  form_last_name = 'lName',
  form_ci = 'ci',
  form_phone = 'phone',
  form_email = 'email',
  form_business_name = 'busName',
  form_nit = 'nit',
  form_seller = 'seller',
  form_customer = 'customer',
}

// export enum enumTags {
//   SEARCH_CI = 'SEARCH_CI',
//   SEARCH_CODE = 'SEARCH_CODE',
//   SEARCH_RESERVE = 'SEARCH_RESERVE',
//   NAME = 'NAME',
//   LAST_NAME = 'LAST_NAME',
//   CI = 'CI',
//   PHONE = 'PHONE',
//   EMAIL = 'EMAIL',
//   BUSINESS_NAME = 'BUSINESS_NAME',
//   NIT = 'NIT',
//   SELLER = 'SELLER',
// }

export enum enumTypeTags {
  DTYPE_INT = 1,
  DTYPE_LONG = 2,
  DTYPE_DECIMAL = 3,
  DTYPE_STRING = 4,
}
