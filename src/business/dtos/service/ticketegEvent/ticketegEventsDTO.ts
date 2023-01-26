export interface GenerateInvoiceTkDTO {
  payer: Payer;
  totalAmount: number;
  transactionNumber: string;
  billingData: BillingData;
  items: Item[];
  clientCode: string;
  usuarioAplicacion: string;
  extraData: string;
}

export interface BillingData {
  bussines_name: string;
  nit: string;
}

export interface Item {
  quantity?: number;
  description: string;
  code: number;
  amount: string;
  extraData?: string;
}

export interface Payer {
  name: string;
  idNumber: string;
  phone: string;
  email: string;
}
