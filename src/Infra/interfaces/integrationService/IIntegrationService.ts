import {
  ClientInfoIS,
  RespContractIS_DTO,
} from '../../../business/dtos/IntegrationService/integrationContractDTO';
import { RespFeeIS } from '../../../business/dtos/IntegrationService/integrationFeeDTO';
import { Req_serviceIntegrationDTO } from '../../../business/dtos/IntegrationService/Req_integrationDTO';
import {
  PayOrderDataDTO,
  resp_payGTW,
} from '../../../business/dtos/payment/gtwPayChannel/gtwPayChannelDTO';
import { info_ConfirmPayOrder } from '../../../business/dtos/service/multipago/multipagoDTO';
import { req_headerMpClientDTO } from '../../../business/dtos/service/MultipagoAgentes/MultipagoAgentesDTO';

export interface IIntegrationService {
  getContracts(searchCriteria: any): Promise<RespContractIS_DTO>;
  getItems(searchCriteria: any): Promise<RespFeeIS>;
  createPayOrder(paymentCriteria: any, header: req_headerMpClientDTO);
  pay(paymentCriteria: any, company: string): Promise<resp_payGTW>;
  confirmPayOrder(data: info_ConfirmPayOrder): Promise<PayOrderDataDTO>;
  cancelPayment(searchCriteria: any);
  getClientInfo(request: Req_serviceIntegrationDTO): Promise<ClientInfoIS>;
}
