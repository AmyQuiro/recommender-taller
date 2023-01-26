// ============= REQUEST =============

// ============= RESPONSE =============

export interface ClientContractsDTO {
  clientCode: string;
  clientFirstName: string;
  clientLastName: string;
  clientFullName: string;
  clientIdNumber: string;
  clientPhone: string;
  contracts: contractsDTO[];
  extraData?: string;
}

export interface contractsDTO {
  code: string;
  name: string;
  description: string;
  extraData?: string;
}

export interface FeeDTO {
  code: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  extraData?: string;
  payed: number;
  pending_to_pay: number;
}

export interface PaymentOKDTO {
  transactionNumber: number;
  extraData?: string;
}
