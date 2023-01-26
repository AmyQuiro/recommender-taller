import {
  ReserveInfoDTO,
  RespRegisterPayment,
} from '../../../business/dtos/flowType/reserve/reserveDTO';

export interface IReserveAction {
  getReserve(searchCriteria: any): Promise<ReserveInfoDTO>;
  registerPayment(criteria: any): Promise<RespRegisterPayment>;
  cancelPayment(criteria: any);
}
