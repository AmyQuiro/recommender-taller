import axios, { AxiosInstance } from 'axios';
import { response } from 'express';
import {
  reqGetInvoiceDTO,
  respGetInvoiceFileDTO,
} from '../../../business/dtos/invoice/transactional/invoiceTransactionalDTO';

export class InvoiceTransaccional {
  async generateInvoice(infoPayment: any): Promise<any> {
    try {
      throw new Error('Metodo no implementado');
    } catch (ex) {
      console.log('InvoiceTransactional generateInvoice error:>> ', ex);
      throw new Error(ex.Message);
    }
  }

  async getInvoiceFile(data: reqGetInvoiceDTO): Promise<any> {
    try {
      var soap = require('soap');
      var url = process.env.TRANSACTIONAL_INVOICE_ENDPOINT;
      var args = {
        username: process.env.TRANSACTIONAL_INVOICE_USERNAME,
        password: process.env.TRANSACTIONAL_INVOICE_PASSWORD,
        service: data.service,
        transaction: data.transactionNumber,
      };
      return new Promise((res, rej) => {
        soap.createClient(url, function(err, client) {
          client.get_file_payment_documents(args, function(
            err,
            result: respGetInvoiceFileDTO<any>,
          ) {
            try {
              if (isOk(result.code)) {
                // result.documents.forEach(element => {
                //   console.log('element :>> ', element);
                // });
                res({ documents: [result.documents.item.$value] });
              }
              rej(result.message);
            } catch (error) {
              throw new Error(error.message);
            }
          });
        });
      });
    } catch (ex) {
      console.error('InvoiceTransactional getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica computarizada.',
      );
    }
  }
  async getInvoiceJson(searchCriteria: any) {
    try {
      throw new Error('Función no implementada');
    } catch (ex) {
      console.error('InvoiceTransactional getInvoiceFile :>> ', ex);
      throw Error(
        'Error al consumir el servicio para obtener la factura fisica computarizada.',
      );
    }
  }

  async cancelInvoice(infoCancel: any) {
    try {
      throw new Error('Función no implementada');
    } catch (ex) {
      console.log('Invoice Computarizada cancelInvoice :>> ', ex);
      throw Error('Error al anular la factura.');
    }
  }
}
function isOk(code: any) {
  return code.$value == 200;
}
