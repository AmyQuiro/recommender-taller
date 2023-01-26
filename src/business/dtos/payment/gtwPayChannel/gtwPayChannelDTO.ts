export interface resp_format<T> {
  statusCode: string;
  status: number;
  message: string;
  data: T;
}

// ==================== LOGIN ====================

export interface req_login {
  username: string;
  password: string;
}

export interface resp_login {
  username: string;
  accessToken: string;
  refreshToken: string;
}

// ==================== PAY ORDER ====================

export interface PayOrderDataDTO {
  payChannelGateway: string;
  md5_pay_order_number: string;
  pay_official_number: number;
  client_name: string;
  client_last_name: string;
  client_ci: string;
  client_phone: string;
  client_email: string;
  client_business_name: string;
  client_nit: string;
  total_amount: number;
  commission: number;
  total_to_pay: number;
  currency: Currency;
  payment_client_response: string;
  status: Status;
  pay_order_date: string;
  pay_order_details: PayOrderDetail[];
  transaction_number: number;
  serviceName: string;
  payChannelCode: string;
}

export interface Currency {
  symbol: string;
  literal: string;
  abbreviation: string;
}

export interface PayOrderDetail {
  code: string;
  concept: string;
  unitary_amount: string;
  quantity: number;
  total_amount: string;
  extra_data?: string;
}

export interface Status {
  id: number;
  name: string;
}

// ==================== PAY ====================

export interface req_PayDTO {
  businessName: string;
  componentData: string;
  document: string;
  email: string;
  extraData: string;
  firstName: string;
  gloss: string;
  lastName: string;
  nit: string;
  payChanelCode: string;
  payOrderNumber: string;
  phone: string;
  totalAmmount: number;
}

export interface resp_payGTW {
  expirationDate: string;
  id: number;
  qr: string;
}

export interface resp_regPayment {
  payOrderNumber: number;
  transactionNumber: number;
  qr: string;
  extraData: string;
  totalAmount: number;
}
