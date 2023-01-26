import {
  ClientContractsDTO,
  FeeDTO,
} from '../../../business/dtos/flowType/contracts/contractsDTO';

export interface IContractAction {
  getContracts(searchCriteria: any): Promise<ClientContractsDTO>;
  getFees(searchCriteria: any): Promise<Array<FeeDTO>>;
  registerPayment(searchCriteria: any);
  cancelPayment(searchCriteria: any);
}
