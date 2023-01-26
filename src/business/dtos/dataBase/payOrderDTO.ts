export interface PayOrderDTO {
  id: string;
  transaction_multipago: Number;
  transaction_commerce: string;
  transaction_gateway: string;
  service_id: string;
  extra_data: string;
}

export interface CreatePayOrderRequestDTO {
  transaction_multipago: Number;
  transaction_commerce: string;
  transaction_gateway: string;
  service_id: string;
  extra_data?: string;
}
