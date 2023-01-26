import axios, { AxiosInstance } from 'axios';
import {
  GenerateInvoiceDTO,
  InvoiceResponse,
  Req_CancelInvoice,
  ReqToken,
  Req_InvoiceFile,
  RespInvoice,
  RespToken,
} from '../../../business/dtos/invoice/ciclos/invoiceCiclosDTO';

export class InvoiceCiclos {
  private clientInstance: AxiosInstance;
  private commerceInfo: ReqToken;

  constructor(user: String, password: String) {
    console.log('user :>> ', user);
    console.log('password :>> ', password);
    this.commerceInfo = {
      userName: user,
      password: password,
    };
  }

  private async getClientAPI(): Promise<AxiosInstance> {
    try {
      let configAxios = {
        baseURL: process.env.INVOICE_URL,
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
      if (this.commerceInfo == null)
        throw Error('No se han agregado los datos del comercio');
      console.log('Invoice commerceInfo :>> ', this.commerceInfo);
      const serviceResponse = await client.post<InvoiceResponse<RespToken>>(
        '/Empresa/Login',
        this.commerceInfo,
      );
      return new Promise((resolve, reject) => {
        let data: string = '';
        if (this.isOK(serviceResponse.data)) {
          data = serviceResponse.data.objeto.TokenInicioSesion;
        }
        resolve(data);
      });
    } catch (ex) {
      console.log('Error getToken :>> ', ex);
      throw new Error(ex);
    }
  }

  async generateInvoice(infoPayment: GenerateInvoiceDTO): Promise<RespInvoice> {
    try {
      let client = await this.getClientAPI();
      console.log('infoPayment :>> ', infoPayment);
      const serviceResponse = await client.post<InvoiceResponse<RespInvoice>>(
        '/Facturacion',
        infoPayment,
      );
      return new Promise((resolve, reject) => {
        if (this.isOK(serviceResponse.data)) {
          let data = serviceResponse.data.objeto;
          console.log('resp Invoice :>> ', data);
          resolve(data);
        } else reject(serviceResponse.data.mensaje);
      });
    } catch (ex) {
      throw new Error(ex.Message);
    }
  }

  async getInvoiceFile(searchCriteria: any) {
    try {
      let dto: Req_InvoiceFile = searchCriteria as Req_InvoiceFile;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.get<any>(
        `facturacion/ObtenerFacturaBase64?token=${dto.token}`,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data;
        resolve(data);
      });
    } catch (ex) {
      console.error('Invoice getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica.',
      );
    }
  }
  async getInvoiceJson(searchCriteria: any) {
    try {
      let dto: Req_InvoiceFile = searchCriteria as Req_InvoiceFile;
      let client = await this.getClientAPI();
      let responseFromAPI = await client.get<any>(
        `facturacion/ObtenerFacturaJSON?token=${dto.token}`,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data;
        resolve(data);
      });
    } catch (ex) {
      console.error('Invoice getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica.',
      );
    }
  }

  async cancelInvoice(infoCancel: Req_CancelInvoice) {
    try {
      let client = await this.getClientAPI();
      let responseFromAPI = await client.post<InvoiceResponse<any>>(
        `Facturacion/AnularFactura`,
        infoCancel,
      );
      return new Promise((resolve, reject) => {
        let data = responseFromAPI.data;
        if (this.isOK(data)) {
          resolve(data.objeto);
        }
        reject(data.mensaje);
      });
    } catch (ex) {
      console.error('Invoice cancelInvoice :>> ', ex);
      throw Error('Error al anular la factura.');
    }
  }

  isOK(data: InvoiceResponse<any>) {
    return data.codigo == 0;
  }
}
