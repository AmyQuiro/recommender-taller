import axios, { AxiosInstance } from 'axios';
import { response } from 'express';

import {
  InvoiceResponse,
  ReqToken,
  Req_CancelInvoiceElec,
  Req_InvoiceFile,
  RespToken,
  CreateInvoiceElectronicaDTO,
  RespInvoiceElectronica,
  DataSesionElectronica,
  Req_InvoiceJSON,
  Req_InvoiceFileByTransactionNumber,
} from '../../../business/dtos/invoice/electronica/invoiceElectronicaDTO';
import { generic } from '../../utils/generic';

export class InvoiceElectronica {
  private clientInstance: AxiosInstance;
  private BaseURL: string;
  private user: string;
  private password: string;

  constructor(baseURLCompany: string, user: string, pass: string) {
    this.BaseURL = baseURLCompany;
    this.user = user;
    this.password = pass;
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

      client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.clientInstance = client;

      return client;
    } catch (error) {
      console.log('error :>> ', error);
      throw Error(error);
    }
  }

  private async getToken(client: AxiosInstance): Promise<String> {
    try {
      let commerceInfo: ReqToken = {
        email: this.user,
        password: this.password,
      };

      const serviceResponse = await client.post<any>(
        '/api/auth/login',
        commerceInfo,
      );
      return new Promise((resolve, reject) => {
        if (serviceResponse.data.access_token)
          resolve(serviceResponse.data.access_token);
        reject('Error al autenticar la aplicación.');
      });
    } catch (ex) {
      console.log('Error getToken :>> ', ex);
      throw new Error(ex);
    }
  }

  private async getDataSesion(
    client: AxiosInstance,
  ): Promise<DataSesionElectronica> {
    try {
      const serviceResponse = await client.post<any>('/api/auth/me');

      return new Promise((resolve, reject) => {
        if (serviceResponse.data.length > 0) resolve(serviceResponse.data);
        reject('Error al obtener datos de la sesión.');
      });
    } catch (ex) {
      console.log('Error data Session :>> ', ex);
      throw new Error(ex);
    }
  }

  private async getPaymentCode(client: AxiosInstance): Promise<Int16Array> {
    try {
      const serviceResponse = await client.post<any>('/api/auth/me');

      return new Promise((resolve, reject) => {
        if (serviceResponse.data.length > 0) resolve(serviceResponse.data);
        reject('Error al obtener datos de la sesión.');
      });
    } catch (ex) {
      console.log('Error data Session :>> ', ex);
      throw new Error(ex);
    }
  }

  async generateInvoice(
    infoPayment: CreateInvoiceElectronicaDTO,
  ): Promise<InvoiceResponse<RespInvoiceElectronica>> {
    try {
      let client = await this.getClientAPI();

      console.log('Inv. Elect. infoPayment :>> ', infoPayment);

      let serviceResponse = await client.post<
        InvoiceResponse<RespInvoiceElectronica>
      >('/api/createInvoice', infoPayment);

      // console.log('respuesta servicio: ', serviceResponse);
      if (this.isOK(serviceResponse.data)) {
        let data: RespInvoiceElectronica = serviceResponse.data.data;
        console.log('resp generateInvoice :>> ', JSON.stringify(data));
        return {
          status: serviceResponse.data.status,
          message: serviceResponse.data.message,
          data: data,
        };
      } else {
        console.log('respuesta error:', serviceResponse.data);
        let message_error = '';
        if (typeof serviceResponse.data.data === 'undefined') {
          message_error = serviceResponse.data.message;
        } else {
          message_error = serviceResponse.data.data.description_SIN;
        }
        throw Error(message_error);
      }
    } catch (ex) {
      console.log('InvoiceElectronica generateInvoice error:>> ', ex);
      throw new Error(ex);
    }
  }

  async getInvoiceFile(invoiceKey: string) {
    try {
      let param: Req_InvoiceFile = {
        invoice_key: invoiceKey,
      };

      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<any>(`/api/getInvoice`, param);
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data.data;
        if (data == undefined) data = responseFromAPI.data;
        resolve(data);
      });
    } catch (ex) {
      console.error('InvoiceElectronica getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica electronica.',
      );
    }
  }

  async getInvoiceFileByTransactionNumber(
    dto: Req_InvoiceFileByTransactionNumber,
  ) {
    try {
      // let dto: Req_InvoiceJSON = searchCriteria as Req_InvoiceJSON;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<any>(
        `/api/getInvoiceByTransaction`,
        {
          transaction_id: dto.transaction_id,
        },
      );

      return responseFromAPI.data;
    } catch (ex) {
      console.error('InvoiceElectronica getInvoiceJSON :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura JSON electronica.',
      );
    }
  }

  async getInvoiceJson(searchCriteria: any) {
    try {
      let dto: Req_InvoiceJSON = searchCriteria as Req_InvoiceJSON;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<any>(`/api/getInvoiceJSON`, {
        invoice_key: dto.invoice_key,
      });

      return responseFromAPI.data;
    } catch (ex) {
      console.error('InvoiceElectronica getInvoiceJSON :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura JSON electronica.',
      );
    }
  }

  async cancelInvoice(infoCancel: Req_CancelInvoiceElec) {
    try {
      let client = await this.getClientAPI();
      console.log('infoCancel :>> ', infoCancel);

      let responseFromAPI = await client.post<InvoiceResponse<any>>(
        `api/cancelInvoice`,
        infoCancel,
      );
      let data = responseFromAPI.data;
      console.log('respo Cancel Invoice electronica :>> ', data);

      return data;
    } catch (ex) {
      console.log('Invoice electronica cancelInvoice :>> ', ex);
      throw Error('Error al anular la factura.');
    }
  }

  async validateNit(nit: string): Promise<any> {
    try {
      let client = await this.getClientAPI();
      console.log('request :>> ', nit);

      let data = {
        point_of_sale: '0',
        branch_office_code: '0',
        nit_client: nit,
      };

      let responseFromAPI = await client.post<any>(`api/checkNitClient`, data);
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data;
        console.log('Verificar nit :>> ', data);
        if (this.isOK(data)) {
          console.log('Respuesta nit: ' + data.data);
          resolve(data.data);
        }
        reject(data.message);
      });
    } catch (ex) {
      console.log('Error al verificar nit :>> ', ex);
      throw Error('Error al verificar el nit del cliente.');
    }
  }

  getDataToCancel(dto: any, extra: any, business_code: string) {
    let cancelDto: Req_CancelInvoiceElec = {
      invoice_key: dto.transactionNumber,
      cancellation_reason_code: dto.reasonToCancel,
      email: process.env.INVOICE_ELECTRONICA_EMAIL,
    };
    return cancelDto;
  }

  isOK(data: InvoiceResponse<any>) {
    return data.status == 10000;
  }

  public static getTypeBilling() {
    return 2;
  }

  public static getPaymentCodeSIN(payment_code) {
    let value;
    switch (payment_code) {
      case 1: // efectivo
        value = payment_code;
        break;
      case 2: // tigo
        value = 32;
        break;
      case 3: // atc payme
        value = 2;
        break;
      case 4: // cybersource
        value = 2;
        break;
      case 5: // transferencia qr
        value = 7;
        break;
      case 6: // TIGO PUNTO FISICO
        value = 5;
        break;
      case 14:
        value = 32;
        break;
      case 15:
        value = 32;
        break;
      default:
        value = 5;
    }
    console.log('canal de pago sin: ' + value);
    return value;
  }
}
