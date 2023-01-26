import { IAuthorizationBearer } from './../../interfaces/authorizationService/IAuthorizationBearer';
import { resp_payGTW } from './../../../business/dtos/payment/gtwPayChannel/gtwPayChannelDTO';
import { req_getTokenDTO } from './../../../business/dtos/service/upds/updsDTO';
import axios, { AxiosInstance } from 'axios';
import {
  req_PayDTO,
  PayOrderDataDTO,
  req_login,
  resp_format,
  resp_login,
} from '../../../business/dtos/payment/gtwPayChannel/gtwPayChannelDTO';

export class gtwPayChannel implements IAuthorizationBearer {
  private async getClientAPI(): Promise<AxiosInstance> {
    let configAxios = {
      baseURL: process.env.GTW_PAY_CHANNEL_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    let client = axios.create(configAxios);
    let token = (await this.getToken(client)) as string;
    client.defaults.headers.common['Authorization'] = token;
    return client;
  }

  async getToken(clientAPI: AxiosInstance): Promise<string> {
    try {
      let param: req_login = {
        username: process.env.GTW_PAY_CHANNEL_USERNAME,
        password: process.env.GTW_PAY_CHANNEL_PASSWORD,
      };
      let serviceResponse = await clientAPI.post<resp_format<resp_login>>(
        `access/login`,
        param,
      );

      return new Promise((resolve, reject) => {
        if (this.isOK(serviceResponse.data)) {
          resolve(serviceResponse.data.data.accessToken);
        }
        reject(serviceResponse.data.message);
      });
    } catch (error) {
      console.log('GTW_PAY_CHANNEL login :>> ', error);
      let msgError = error.message ?? error;
      throw new Error(msgError);
    }
  }

  async pay(payOrderData: PayOrderDataDTO): Promise<resp_payGTW> {
    try {
      let clientAPI = await this.getClientAPI();

      let param = this.getRegisterPaymentData(payOrderData);
      console.log('param gtw paychannel pay :>> ', JSON.stringify(param));
      let serviceResponse = await clientAPI.post<resp_format<resp_payGTW>>(
        `pay`,
        param,
      );

      return new Promise((resolve, reject) => {
        if (this.isOK(serviceResponse.data)) {
          resolve(serviceResponse.data.data);
        }
        reject(serviceResponse.data.message);
      });
    } catch (error) {
      console.log('GTW_PAY_CHANNEL pay :>> ', error);
      let msgError = error.message ?? error;
      throw new Error(msgError);
    }
  }

  private getRegisterPaymentData(payOrderData: PayOrderDataDTO): req_PayDTO {
    try {
      let dataPayment: req_PayDTO = {
        businessName: payOrderData.client_business_name,
        componentData: '',
        document: payOrderData.client_ci,
        email: payOrderData.client_email,
        extraData: '',
        gloss: 'Pago de ' + payOrderData.serviceName.substring(0, 60),
        firstName: payOrderData.client_name,
        lastName: payOrderData.client_last_name,
        nit: payOrderData.client_nit,
        payChanelCode: payOrderData.payChannelGateway,
        payOrderNumber: `${payOrderData.pay_official_number}`,
        phone: payOrderData.client_phone,
        totalAmmount: payOrderData.total_amount,
      };

      return dataPayment;
    } catch (error) {
      console.log('Error :>> ', error);
      let msgError = error.message ?? error;
      throw new Error(msgError);
    }
  }

  // ================ METODOS PRIVADOS ================
  private isOK(serviceResponse: resp_format<any>) {
    let HTTP_OK = '10000';
    return serviceResponse.statusCode == HTTP_OK;
  }
}
