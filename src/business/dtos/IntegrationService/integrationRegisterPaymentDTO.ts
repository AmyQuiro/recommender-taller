// =================== Confirm Entity ==================0

export interface RegisterPaymentEntity {
  idTransaction: number;
  payChannel: string;
  contractType: string;
  contractCode: string;
  paymentPlace: string;
  transactionData: string;
  paymentDetails: PaymentDetail[];
  selectedData: SelectedDatum[];
  extraData: string;
}

export interface PaymentDetail {
  code: string;
  concept: string;
  description: string;
  type: number;
  quantiy: number;
  amount: number;
}

export interface SelectedDatum {
  tagCode: string;
  value: string;
}

//======================= confirm Multipago ================

export interface RegisterPaymentMultipago {
  serviceCode: string;
  payChannel: string;
  client: Client;
  billingData: BillingData;
  items: Item[];
  extraData: string;
}

export interface BillingData {
  businessName: string;
  nit: string;
}

export interface Client {
  firstName: string;
  lastName: string;
  ci: string;
  phone: string;
  email: string;
}

export interface Item {
  code: string;
  concept: string;
  amount: number;
  currency: string;
  extraData: string;

  type: number;
  quantity: number;
}
