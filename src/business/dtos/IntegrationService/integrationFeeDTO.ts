// ====================== REQUEST ======================

import { ClientInfoIS } from './integrationContractDTO';

// ====================== RESPONSE ======================

export interface RespFeeIS {
  contractCode: string;
  transactionData: string;
  items: ItemIS[];
  types: TypeIS[];
}

export interface ItemIS {
  order: number;
  code: string;
  concept: string;
  description: string;
  expirationDate: string;
  amount: number;
  maxamount: number;
  minimumAmount: number;
  commissionAmount: number;
  maximumQuatity: number;
  extra_info: ExtraInfo[];
  type: number;
  quantity: number;
}
export interface ExtraInfo {
  key: string;
  value: string;
}
export interface TypeIS {
  type: number;
  type_literal: string;
  typeFlow: string;
}

export interface ED_ItemsIS {
  contractCode: string;
  // clientInfo: ClientInfoIS;
}
