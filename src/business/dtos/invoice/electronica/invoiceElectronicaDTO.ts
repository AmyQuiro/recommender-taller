//=================== GENERAL ===================

export interface InvoiceResponse<T> {
  status: number;
  message: string;
  data: T;
}

//=================== TOKEN ===================
export interface ReqToken {
  email: String;
  password: String;
}

export interface RespToken {
  token: string;
}

//=================== GENERATE INVOICE ===================

export interface CreateInvoiceElectronicaDTO {
  transaction_id: string;
  mail: string;
  client_document: string;
  type_document: string;
  complement: string;
  exception_code: string;
  code_client: string;
  code_payment: string;
  card_number: string;
  business_name: string;
  client_phone: string;
  total_amount: string; // Edson confirmó que este campo ya no es necesario.
  gift_card_ammount: string;
  discount: number;
  extra_data: any;
  items: ItemElectronica[];
  emission_code: number;
  point_of_sale: string;
  branch_office_code: string;
  locality: string;
  code_currency: string;
  exchange_rate: number;
  code_sector_document: string;
  invoice_type: number;
}

export interface CreatePaymentDTOEExtraData {}

export interface ItemElectronica {
  product_code: string;
  description: string;
  quantity: number;
  price: number;
  extra_data: any | ItemExtraData;
  code_unit: number;
  activity_code: number;
  code_product_sin: string;
}

export interface ItemExtraData {
  discount_amount: string;
}

// RESPONSE INVOICE
export interface InvoiceCreateElectronica {
  invoice: RespInvoiceElectronica;
}

export interface RespInvoiceElectronica {
  Invoice_id: string;
  response_description_code: string;
  response_state_code: number;
  response_code: string;
  response_description: boolean;
  status_code_SIN: number;
  shipping_status_SIN: string;
  description_SIN: string;
  invoice_data: InvoiceData;
  reception_code: string;
}

export interface InvoiceData {
  branch_office_data: BranchOfficeData;
  company_nit: string;
  invoice_number: number;
  authorization_code: string;
  activity: string;
  client_data: ClientData;
  detail: Detail[];
  amounts: Amounts;
  generic_legend: string;
  leyend_activity: string;
  date_emit: string;
  qr: string;
  extra_data?: string;
  cufd?: string; // Preguntar a Ariel sobre este campo que llega en univalle
}

export interface Amounts {
  literal: string;
  amount: string;
}

export interface BranchOfficeData {
  company_name: string;
  branch_office_name: string;
  address: string;
  phone: string;
  locality: string;
}

export interface ClientData {
  place_date: string;
  client_nit: string;
  business_name: string;
  client_code: string;
}

export interface Detail {
  product_code: string;
  quantity: string;
  description: string;
  unit_price: string;
  discount: string;
  total_amount: number;
  extra_data: any[];
}

export interface DataSesionElectronica {
  id: string;
  name: string;
  email: string;
  remember_token: string;
  company_id: string;
  branch_office_id: string;
  point_of_sale_id: string;
  cuis: CodeSIN;
  cufd: CodeSIN;
}

export interface CodeSIN {
  value: string;
  expiration: string;
}

export interface Req_CancelInvoiceElec {
  invoice_key: string;
  cancellation_reason_code: string;
  email: string;
}

//=================== INVOICE FILE ===================
export interface Req_InvoiceFile {
  invoice_key: String;
}

//=================== INVOICE JSON ===================
export interface Req_InvoiceJSON {
  invoice_key: String;
  extra_data?: string;
}
export interface Req_InvoiceFileByTransactionNumber {
  transaction_id: String;
  extra_data?: string;
}
