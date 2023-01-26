export interface BillingData {
  nit: string;
  bussines_name: string;
  document_type: string;
}
export interface ItemsToPay {
  code: string;
  currency: string;
  description: string;
  amount: number;
  extraData?: string;
}

export interface Infotransaction {
  customCode: string
  contractCode: string;
  payChannel: number;
  cardNumber: string;
  transactionNumber: string;
  transactionNumberCommission: string;
}

export interface PayerInfo {
  firstName: string;
  lastName: string;
  ci: string;
  phone: string;
  email: string;
}

export interface CompanyTransaction {
  name: string;
  nit: string;
  address: string;
  telephone: string;
}

export interface ExtraInfoPayment {
  source: number;
  searchId: number;
  printType: number;
  city_code: string;
  city_name: string;
  town_code: string;
  town_name: string;
  entity_code: string;
  entity_name: string;
  agency_code: string;
  agency_name: string;
  operator_code: string;
  operator_username: string;
  way_pay: string;
  note: string;
}
