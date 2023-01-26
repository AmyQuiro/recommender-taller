import { ClientDebts } from '../../../business/dtos/flowType/debts/debtsDTO';

export interface IClientAction {
  getClient(searchCriteria: any): Promise<ClientDebts | ClientDebts[]>;
}
