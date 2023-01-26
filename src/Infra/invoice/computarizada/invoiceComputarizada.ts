import axios, { AxiosInstance } from 'axios';
import { response } from 'express';

import {
  InvoiceResponse,
  Req_CancelInvoice,
  ReqToken,
  Req_InvoiceFile,
  RespToken,
  CreatePaymentDTO,
  RespInvoiceCreatePayment,
  Resp_CancelInvoice,
} from '../../../business/dtos/invoice/computarizada/invoiceComputarizadaDTO';

export class InvoiceComputarizada {
  private clientInstance: AxiosInstance;
  private BaseURL: string;

  constructor(baseURLCompany: string) {
    this.BaseURL = baseURLCompany;
  }

  private async getClientAPI(): Promise<AxiosInstance> {
    try {
      let baseURL = this.BaseURL;
      let configAxios = {
        baseURL: baseURL,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      let client = axios.create(configAxios);
      let token = (await this.getToken(client)) as string;

      client.defaults.headers.common['Authorization'] = token;
      this.clientInstance = client;

      return client;
    } catch (error) {
      console.log('error :>> ', error);
      throw Error(error);
    }
  }

  private async getToken(client: AxiosInstance): Promise<String> {
    try {
      let commerceInfo = {
        username: process.env.INVOICE_COMPUTARIZADA_USER,
        password: process.env.INVOICE_COMPUTARIZADA_PASSWORD,
      };

      const serviceResponse = await client.post<InvoiceResponse<RespToken>>(
        '/get_token',
        commerceInfo,
      );
      return new Promise((resolve, reject) => {
        let data: string = '';
        if (this.isOK(serviceResponse.data)) {
          data = serviceResponse.data.data.token;
          console.log('data token :>> ', data);
        }
        resolve(data);
      });
    } catch (ex) {
      console.log('Error getToken :>> ', ex);
      throw new Error(ex);
    }
  }

  async generateInvoice(
    infoPayment: CreatePaymentDTO,
  ): Promise<RespInvoiceCreatePayment> {
    try {
      let client = await this.getClientAPI();
      console.log('infoPayment :>> ', infoPayment);
      const serviceResponse = await client.post<
        InvoiceResponse<RespInvoiceCreatePayment>
      >('/create_payment', infoPayment);
      return new Promise((resolve, reject) => {
        if (this.isOK(serviceResponse.data)) {
          let data = serviceResponse.data.data;
          console.log('resp generateInvoice :>> ', data);
          resolve(data);
        } else {
          console.log('comp gen inv error :>> ', serviceResponse);
          if (serviceResponse.data.hasOwnProperty('message'))
            reject(serviceResponse.data.message);
          throw new Error('Error al generar la factura.');
        }
      });
    } catch (ex) {
      console.log('InvoiceComputarizada generateInvoice error:>> ', ex);
      throw new Error(ex.Message);
    }
  }

  async getInvoiceFile(searchCriteria: any) {
    try {
      let dto: Req_InvoiceFile = searchCriteria as Req_InvoiceFile;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<any>(
        `get_file_payment_documents`,
        dto,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data.data;
        if (data == undefined) data = responseFromAPI.data;
        resolve(data);
      });
    } catch (ex) {
      console.error('InvoiceComputarizada getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica computarizada.',
      );
    }
  }
  async getInvoiceJson(searchCriteria: any) {
    try {
      let dto: Req_InvoiceFile = searchCriteria as Req_InvoiceFile;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<any>(
        `get_data_payment_documents`,
        dto,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data.data;
        resolve(data);
      });
    } catch (ex) {
      console.error('InvoiceComputarizada getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica computarizada.',
      );
    }
  }

  async cancelInvoice(
    infoCancel: Req_CancelInvoice,
  ): Promise<Resp_CancelInvoice> {
    try {
      let client = await this.getClientAPI();
      console.log('infoCancel :>> ', infoCancel);

      let responseFromAPI = await client.post<InvoiceResponse<any>>(
        `reverse_payment`,
        infoCancel,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data;
        console.log('respo Cancel Invoice computarizada :>> ', data);
        if (this.isOK(data)) {
          resolve(data.data);
        }
        reject(data.message);
      });
    } catch (ex) {
      console.log('Invoice Computarizada cancelInvoice :>> ', ex);
      throw Error('Error al anular la factura.');
    }
  }

  getDataToCancel(dto: any, extra: any, business_code: string) {
    let cancelDto: Req_CancelInvoice = {
      transaction_number: dto.transactionNumber,
      business_code: business_code,
      city_code: extra.city_code ?? '',
      city_name: extra.city_name ?? '',
      town_code: extra.town_code ?? '',
      town_name: extra.town_name ?? '',
      entity_code: extra.entity_code ?? '',
      entity_name: extra.entity_name ?? '',
      agency_code: extra.agency_code ?? '',
      agency_name: extra.agency_name ?? '',
      operator_code: extra.operator_code ?? '',
      operator_username: dto.user,
      note: dto.reasonToCancel,
    };
    return cancelDto;
  }

  isOK(data: InvoiceResponse<any>) {
    return data.code == 200;
  }

  public static getTypeBilling() {
    return 1;
  }
}
