export interface ITelecommunicationAction {
  getClient(searchCriteria: any);
  getPackages(searchCriteria: any);
  buyCredit(searchCriteria: any);
  buyPackage(criteria: any);
  getDigitalInvoice(criteria: any);
  getPhysicalInvoice(criteria: any);
  getDebtPostPago(criteria: any);
  getContractPostPago(criteria: any);
  registerPaymentPostpago(criteria: any);
  cancelPayment(criteria: any);
}
