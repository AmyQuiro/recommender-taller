import { ClientDebts } from '../../../business/dtos/flowType/debts/debtsDTO';

export interface IDebtsAction {
  getDebts(searchCriteria: any): Promise<ClientDebts>;
  registerPayment(criteria: any);
  cancelPayment(criteria: any);
}
