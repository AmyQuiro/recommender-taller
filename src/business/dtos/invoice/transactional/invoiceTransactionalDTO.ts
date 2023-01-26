export interface reqGetInvoiceDTO {
  service: number;
  transactionNumber: number;
}

export interface respGetInvoiceFileDTO<T> {
  code: number;
  message: string;
  documents: T;
}
