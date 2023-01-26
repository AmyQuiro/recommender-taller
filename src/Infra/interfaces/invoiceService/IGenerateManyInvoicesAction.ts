import { RespInvoiceCreatePayment } from '../../../business/dtos/invoice/computarizada/invoiceComputarizadaDTO';

export interface IGenerateManyInvoicesAction {
  generateManyInvoices(data: any): Promise<RespInvoiceCreatePayment[]>;
}
