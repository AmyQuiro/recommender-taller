// ====================== REQUEST ======================

export interface ReqContract {
  serviceCode: string;
  applicationUser: string;
  sectionCode: string;
  selectedData: SelectedDatum[];
}

export interface SelectedDatum {
  tagCode: string;
  value: string;
}

// ====================== RESPONSE ======================

export interface RespContractIS_DTO {
  serviceCode: string;
  clientCi: string;
  clientFirstName: string;
  clientLastName: string;
  clientFullName: string;
  transactionData: string;
  legend: string;
  contracts: ContractIS_DTO[];
}

export interface ContractIS_DTO {
  code: string;
  type: string;
  name: string;
  description: string;
  extraData: any[];
}

// export interface ED_ContractIS {
//   clientInfo: ClientInfoIS;
// }
export class ClientInfoIS {
  clientFirstName: string;
  clientLastName: string;
  clientFullName: string;
  clientCi: string;
  clientPhone?: string = '';
  clientEmail?: string = '';
  clientNit: string;
  clientBusinessName: string;
}
